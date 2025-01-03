import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';
import { PencilIcon } from 'lucide-react';
import { getResultByUser } from '@/lib/queries/results/queries';
import { auth } from '../auth';
import { redirect } from 'next/navigation';
import getSession from '@/lib/getSession';

export default async function MyProfile() {
  const session = await getSession();
  const user = session?.user;
  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }

  const results = await getResultByUser(user?.id as string);

  let points = 0;
  let questionsAnswered = 0;

  if (results) {
    points = results.reduce((sum, result) => sum + (result.points || 0), 0);
    questionsAnswered = results.reduce(
      (sum, result) => sum + (result.correctlyAnswered || 0),
      0
    );
  }

  return (
    <div className="min-h-screen w-full flex justify-center items-start p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="h-auto w-full max-w-lg flex flex-col items-center justify-around space-y-5 p-4 sm:mt-14">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-3">
          {/* Avatar */}
          <div className="relative">
            <Avatar className="size-24 border-2 border-[#ffff]">
              <AvatarImage src={user?.image as string} />
              <AvatarFallback className="bg-primary  text-white font-bold text-lg">
                {user?.name && user.name[0]}
              </AvatarFallback>
            </Avatar>

            {/* Edit Icon */}
            <Link
              href="/my-profile/edit"
              className="absolute bottom-2 right-2 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary-dark transition"
            >
              <PencilIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Name and Username */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-800">{user?.name}</h3>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex items-center justify-around space-x-4 w-full">
          {[
            { label: 'Points', value: points },
            { label: 'Games', value: results?.length || 0 },
            { label: 'Answered', value: questionsAnswered || 0 },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h1 className="font-bold text-primary text-xl">{stat.value}</h1>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="w-full bg-white rounded-lg shadow-md p-4 space-y-4">
          {[
            {
              label: 'Name',
              value: user.name,
            },
            { label: 'Email', value: user?.email || 'N/A' },
            { label: 'Id', value: user?.id || 'N/A' },
          ].map((info, index) => (
            <div
              key={index}
              className="flex flex-col space-y-1 border-b last:border-none pb-3"
            >
              <p className="text-primary font-semibold text-xs uppercase">
                {info.label}
              </p>
              <p className="text-gray-700">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex items-center w-full">
          <Link
            href="/my-profile/edit"
            className="w-full text-center bg-gradient-to-br from-primary to-[#7116bb] text-white font-medium py-3 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
