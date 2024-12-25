import { getAllUsers } from '@/lib/queries/users/queries';
import DataTable from './DataTable';

export default async function UsersData() {
  const users = await getAllUsers();
  const formattedUsers = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_At: new Date(user.createdAt).toLocaleDateString(),
      updated_At: new Date(user.updatedAt).toLocaleDateString(),
    };
  });

  return <DataTable data={formattedUsers} type="users" />;
}
