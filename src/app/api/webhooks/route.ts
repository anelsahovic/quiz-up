import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import {
  createUser,
  deleteUserWH,
  updateUserWH,
} from '@/lib/actions/users/actions';

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      'Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error: Could not verify webhook:', err);
    return new Response('Error: Verification error', {
      status: 400,
    });
  }

  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, image_url, email_addresses, first_name, last_name, username } =
      evt.data;

    if (!id || !email_addresses) {
      return new Response('Missing data', { status: 400 });
    }

    const user = {
      clerkUserId: id,
      imageUrl: image_url,
      email: email_addresses[0].email_address,
      firstName: first_name as string,
      lastName: last_name as string,
      username: username as string,
    };

    await createUser(user);
  }
  if (eventType === 'user.updated') {
    const { id, image_url, email_addresses, first_name, last_name, username } =
      evt.data;

    if (!id || !email_addresses) {
      return new Response('Missing data', { status: 400 });
    }

    const user = {
      clerkUserId: id,
      imageUrl: image_url,
      email: email_addresses[0].email_address,
      firstName: first_name as string,
      lastName: last_name as string,
      username: username as string,
    };

    await updateUserWH(user);
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;

    if (!id) {
      return new Response('Missing data', { status: 400 });
    }

    await deleteUserWH(id);
  }

  return new Response('Webhook received', { status: 200 });
}
