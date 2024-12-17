import { getAllUsers } from '@/lib/queries/users/queries';
import DataTable from './DataTable';
import { clerkClient } from '@clerk/nextjs/server';

export default async function UsersData() {
  const users = await getAllUsers();
  const client = await clerkClient();
  // const users = await client.users.getUserList();
  console.log(users);
  return <DataTable data={users} type="users" />;
}
