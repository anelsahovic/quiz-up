import { UserButton, UserProfile } from '@clerk/nextjs';

import React from 'react';

export default function page() {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <UserProfile />
      </div>
    </div>
  );
}
