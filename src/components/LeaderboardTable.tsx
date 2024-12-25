import { UserResult } from '../../types/types';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Image from 'next/image';
import { getAllResults } from '@/lib/queries/results/queries';
import { getUserById } from '@/lib/queries/users/queries';

// const results = [
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 34,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 24,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 22,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 56,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 41,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 12,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 11,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 61,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 16,
//   },
//   {
//     user: { firstName: 'John', lastName: 'Doe' },
//     points: 16,
//   },
// ];

// const results = [{ user:{firstName:'', lastName:''}, points: 0 }];

export default async function LeaderboardTable() {
  const data = await getAllResults(); // Fetch all results

  // Function to fetch user data for each userId and group results

  const groupedResults: Record<string, UserResult> = {}; // Explicitly define the type for groupedResults

  const getGroupedResults = async () => {
    for (const result of data) {
      const { userId, points } = result;

      if (!groupedResults[userId]) {
        const user = await getUserById(userId); // Fetch user details
        if (user) {
          groupedResults[userId] = {
            user: {
              imageUrl: user.image as string,
              name: user.name as string,
            },
            points: 0,
          };
        }
      }

      groupedResults[userId].points += points; // Accumulate points
    }

    return Object.values(groupedResults);
  };

  // Call the function
  const results = await getGroupedResults();
  const sortedResults = results.sort((a, b) => b.points - a.points);

  const firstThree = sortedResults.slice(0, 3);
  const lastSeven = sortedResults.slice(3, 10);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-around pt-2 bg-gradient-to-tr from-primary to-[#7116bb]">
      <div className="h-1/4 w-full -mt-4 sm:mt-20 flex flex-col justify-center  items-center">
        <div className="flex items-center h-full justify-center space-x-4">
          <div className="relative mt-10">
            {/* Bronze Medal */}
            {firstThree[1] ? (
              <>
                <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
                  <Image
                    src="/bronze_medal.png"
                    alt="second"
                    width={40}
                    height={40}
                  />
                </span>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Avatar className="size-16 border-2 border-[#ff5858]">
                    <AvatarImage src={firstThree[1].user.imageUrl} />
                    <AvatarFallback className="bg-primary  text-white font-bold text-lg">
                      {firstThree[1].user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center justify-center -space-y-1">
                    <h3 className="font-semibold text-white text-lg">
                      {firstThree[1].user.name}
                    </h3>
                    <p className="text-amber-600 font-semibold text-sm m-0 p-0">
                      {firstThree[1].points}
                      <span> pts</span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="bg-gray-300 text-gray-500 ring-2 ring-gray-500 text-lg font-bold size-16 flex items-center justify-center rounded-full">
                  N/A
                </div>
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <h3 className="font-semibold text-white text-lg">N/A</h3>
                  <p className="text-amber-100 font-semibold text-sm m-0 p-0">
                    N/A
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            {/* Gold Medal */}
            {firstThree[0] ? (
              <>
                <span className="absolute bottom-7 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
                  <Image
                    src="/gold_medal.png"
                    alt="first_place"
                    width={70}
                    height={70}
                  />
                </span>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Avatar className="size-20 border-2 border-[#ffff]">
                    <AvatarImage src={firstThree[0].user.imageUrl} />
                    <AvatarFallback className="bg-primary  text-white font-bold text-lg">
                      {firstThree[0].user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center justify-center -space-y-1">
                    <h3 className="font-semibold text-white text-lg">
                      {firstThree[0].user.name}
                    </h3>
                    <p className="text-yellow-500 font-semibold text-sm m-0 p-0">
                      {firstThree[0].points}
                      <span> pts</span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="bg-gray-300 text-gray-500 ring-2 ring-gray-500 text-lg font-bold size-20 flex items-center justify-center rounded-full">
                  N/A
                </div>
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <h3 className="font-semibold text-white text-lg">N/A</h3>
                  <p className="text-amber-100 font-semibold text-sm m-0 p-0">
                    N/A
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="relative mt-10">
            {/* Silver Medal */}
            {firstThree[2] ? (
              <>
                <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-10">
                  <Image
                    src="/silver_medal.png"
                    alt="third_place"
                    width={50}
                    height={50}
                  />
                </span>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Avatar className="size-16 border-2 border-[#ff5858]">
                    <AvatarImage src={firstThree[2].user.imageUrl} />
                    <AvatarFallback className="bg-primary  text-white font-bold text-lg">
                      {firstThree[2].user.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-center justify-center -space-y-1">
                    <h3 className="font-semibold text-white text-lg">
                      {firstThree[2].user.name}
                    </h3>
                    <p className="text-gray-200 font-semibold text-sm m-0 p-0">
                      {firstThree[2].points}
                      <span> pts</span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="bg-gray-300 text-gray-500 ring-2 ring-gray-500 text-lg font-bold size-16 flex items-center justify-center rounded-full">
                  N/A
                </div>
                <div className="flex flex-col items-center justify-center -space-y-1">
                  <h3 className="font-semibold text-white text-lg">N/A</h3>
                  <p className="text-amber-100 font-semibold text-sm m-0 p-0">
                    N/A
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow items-center max-w-2xl mx-auto bg-slate-100 w-full rounded-t-3xl space-y-2 p-3">
        {lastSeven.map((result, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-3 px-4 w-full bg-white shadow rounded-lg"
          >
            <div className="flex items-center space-x-2">
              {/* Number */}
              <span className="text-sm font-bold text-slate-800 w-6 text-left">
                {index !== 6 ? `0${index + 4}.` : `${index + 4}.`}
              </span>

              {/* Avatar and Name */}
              <div className="flex items-center space-x-2">
                <Avatar className="size-8 border-2 border-[#fff]">
                  <AvatarImage src={result.user.imageUrl} />
                  <AvatarFallback className="bg-gradient-to-b from-primary to-[#7116bb] text-white font-bold text-sm">
                    {result?.user?.name ? result.user.name[0] : 'N/A'}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-slate-800 font-medium">
                  {result?.user?.name ? result?.user?.name : 'N/A'}
                </h2>
              </div>
            </div>

            {/* Points */}
            <div className="flex items-center space-x-1">
              <p className="text-primary font-bold">
                {result?.points ?? 'N/A'}
              </p>
              <span className="text-sm">pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
