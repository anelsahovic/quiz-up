import UserForm from '@/components/UserForm';
import { User } from '@/types/types';
import React from 'react';

export default function EditUser() {
  const user: User = {
    id: 'uvdawibdwaondboawda',
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'johndoe@mail.com',
    role: 'PLAYER',
  };
  return <UserForm formTitle="Edit User" buttonText="Save" data={user} />;
}
