import { auth } from '../auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import getSession from '@/lib/getSession';
import { getResultByUser } from '@/lib/queries/results/queries';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect('/sign-in'); // Redirect to homepage if the  user is unavailable
  }

  const results = await getResultByUser(user?.id as string);
  let points = 0;
  if (results) {
    points = results.reduce((sum, result) => sum + result.points, 0);
  }

  const initials = user.name ? user.name[0] : 'N/A';
  return (
    <div className="w-screen h-screen p-4 flex flex-col items-center">
      <div className="h-1/2 max-w-[800px] w-full flex flex-col items-center gap-4 sm:mt-[85px]">
        <div className="flex flex-col items-center justify-center w-full h-1/2 bg-gradient-to-t from-primary to-[#7116bb] text-white rounded-xl py-1 px-6 shadow-lg relative hover:scale-105 transition-all duration-300">
          {/* upper section */}
          <div className="flex items-center justify-around w-full ">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Avatar className="size-12 sm:size-14 border-2 shadow-md">
                <AvatarImage
                  className="border-primary"
                  src={user?.image as string}
                />

                <AvatarFallback className="bg-primary text-white text-2xl font-bold border-white">
                  {user && user.name && user.name[0]}
                </AvatarFallback>
              </Avatar>

              {/* Welcome Message */}
              <div className="flex flex-col text-left">
                <h1 className="text-sm sm:text-base font-medium">
                  Welcome back,
                </h1>
                <p className="text-base sm:text-lg font-bold">{user.name}</p>
              </div>
            </div>

            <Image
              src="/quiz_up_logo.png"
              alt="App Logo"
              width={70}
              height={70}
              className="sm:size-20"
            />
          </div>

          {/* Bottom Section */}
          <div className="w-full flex flex-col space-y-1 max-w-2xl sm:mb-4">
            <div className="text-sm text-center text-slate-200">
              Your progress
            </div>

            {/* Progress Bar */}

            <div className="relative w-full bg-gray-300 rounded-full h-7">
              <div
                className={`absolute top-0 left-0 h-7 rounded-full ${
                  points > 0
                    ? 'bg-gradient-to-r from-[#ff5858] to-[#f09819]'
                    : 'bg-gray-300'
                }`}
                style={{ width: '60%' }}
              >
                <span
                  className={`font-semibold text-sm  ml-2 ${
                    points > 0 ? 'text-slate-100' : 'text-slate-400'
                  }`}
                >
                  {points > 0 ? points : 'You have no '}
                  pts
                </span>{' '}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 flex gap-4 ">
          <div className="bg-gradient-to-br from-[#f1e9e0]  to-[#e2d1c3] w-full rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center justify-center">
            <Link
              href="/leaderboard"
              className="flex flex-col items-center justify-between text-white text-center w-full h-full"
            >
              {/* Title */}
              <h1 className="font-bold text-lg text-yellow-900">Leaderboard</h1>

              {/* Image */}
              <div className="relative">
                <Image
                  src="/cup_clipart.png"
                  alt="Trophy Clipart"
                  width={85}
                  height={85}
                  className="relative z-10"
                />
              </div>

              {/* Description */}
              <p className="text-sm font-medium tracking-wide text-yellow-900">
                See the rankings
              </p>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-[#accbee]  to-[#c1d6f4] w-full rounded-xl shadow hover:shadow-xl transform hover:scale-105 transition duration-300 flex items-center justify-center">
            <Link
              href="/my-profile"
              className="flex flex-col items-center justify-between text-white text-center space-y-1 w-full h-full"
            >
              {/* Title */}
              <h1 className="font-bold text-lg text-indigo-900">Profile</h1>

              {/* Image */}
              <div className="relative">
                <Image
                  src="/user.png"
                  alt="User Clipart"
                  width={80}
                  height={80}
                  className="relative z-10"
                />
              </div>

              {/* Description */}
              <p className="text-sm font-medium tracking-wide text-indigo-900">
                See your profile
              </p>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-1/2  w-full flex justify-center items-start mt-4">
        <Carousel className="w-full max-w-[800px]">
          <CarouselContent className="-ml-1 ">
            <CarouselItem className="pl-1 h-full basis-4/5 md:basis-1/2 ">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent
                    className={`flex h-full flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#43e97b] to-[#38f9d7]`}
                  >
                    <h2 className="text-xl font-bold">Easy Mode</h2>
                    <h3 className="font-jersey10 font-bold text-8xl">1X</h3>
                    <p className="text-sm text-center">
                      Challenge yourself and earn 1x points for every correct
                      answer.
                    </p>
                    <Link
                      href="/lobby"
                      className="py-2 px-3 rounded-full shadow bg-white text-green-700 font-semibold text-sm uppercase mt-2"
                    >
                      Warm Up Now
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-1 h-full basis-4/5 md:basis-1/2 ">
              <div className="p-1">
                <Card>
                  <CardContent
                    className={`flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#d6db3d] to-[#f9ac38]`}
                  >
                    <h2 className="text-xl font-bold">Medium Mode</h2>
                    <h3 className="font-jersey10 font-bold text-8xl">2X</h3>
                    <p className="text-sm text-center">
                      Challenge yourself with medium difficulty and earn 2x
                      points.
                    </p>
                    <Link
                      href="/lobby"
                      className="py-2 px-3 rounded-full shadow bg-white text-amber-700 font-semibold text-sm uppercase mt-2"
                    >
                      Step It Up
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem className="pl-1 h-full basis-4/5 md:basis-1/2 ">
              <div className="p-1">
                <Card>
                  <CardContent
                    className={`flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#b24c30] to-[#d11313]`}
                  >
                    <h2 className="text-xl font-bold">Hard Mode</h2>
                    <h3 className="font-jersey10 font-bold text-8xl">3X</h3>
                    <p className="text-sm text-center">
                      Conquer hard mode and reap 3x points for every correct
                      answer.
                    </p>
                    <Link
                      href="/lobby"
                      className="py-2 px-3 rounded-full shadow bg-white text-rose-700 font-semibold text-sm uppercase mt-2"
                    >
                      Triple Points
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
