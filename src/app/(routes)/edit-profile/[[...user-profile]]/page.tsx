import { UserProfile } from '@clerk/nextjs';

export default function page() {
  return (
    <div className="flex justify-center items-center">
      <div className="">
        <UserProfile />
      </div>
    </div>
  );
}
