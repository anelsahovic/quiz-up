import { getAllUsers } from '@/lib/queries/users/queries';
import DataTable from './DataTable';
import { User } from '@/types/types';

export default async function UsersData() {
  const users = await getAllUsers();
  const formattedUsers = users.map((user) => {
    return {
      id: user.id,
      clerk_User_Id: user.clerkUserId,
      first_name: user.firstName,
      last_name: user.lastName,
      username: user.username,
      email: user.email,
      role: user.role,
      created_At: new Date(user.createdAt).toLocaleDateString(),
      updated_At: new Date(user.updatedAt).toLocaleDateString(),
    };
  });

  return <DataTable data={formattedUsers} type="users" />;
}
