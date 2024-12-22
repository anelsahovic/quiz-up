import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Facebook,
  Instagram,
  Linkedin,
  Play,
  TrendingUp,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className=" w-full max-w-7xl flex flex-col mx-auto  bg-gradient-to-br from-primary to-[#7116bb] text-white">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <Image
            src="/quiz_up_logo.png"
            alt="Quiz Up Logo"
            width={70}
            height={70}
            className="hover:opacity-90 transition-opacity"
          />
          <h1 className="hidden sm:flex text-white text-3xl font-bold">
            QuizUp
          </h1>
        </div>
        <Link
          href="/home"
          className="py-2 px-3 border-2 border-[#FFD700] rounded-full text-[#FFD700] hover:bg-[#FFD700] hover:text-primary transition-all duration-300"
        >
          Start Your Journey
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col sm:flex-row items-center justify-around  space-y-8 md:space-y-0 px-4">
        {/* Text Content */}
        <div className="flex flex-col items-center px-2 justify-center sm:items-start max-w-lg space-y-4">
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Level Up Your Knowledge with{' '}
            </h1>
            <div className="flex items-center justify-center sm:justify-start space-x-1">
              <h2 className="text-[#FFD700] jersey_10_8cf6801b-module__g70_MG__className text-8xl ">
                Quiz
              </h2>
              <span className="text-[#FFD700] jersey_10_8cf6801b-module__g70_MG__className text-8xl animate-bounce duration-1000">
                Up
              </span>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed text-center sm:text-left">
            Test your knowledge across a variety of topics. Engage, compete, and
            learn while having fun.
          </p>
          <Link
            href="/lobby"
            className="px-8 py-3 bg-[#FFD700] text-primary font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Explore Quizzes
          </Link>
        </div>

        {/* Image */}
        <div className="w-1/2 md:w-1/2 lg:w-1/2 flex justify-center">
          <Image
            src="/lobby_portrait.png"
            alt="Quiz Lobby"
            width={300}
            height={300}
          />
        </div>
      </div>

      <div className="bg-white w-full px-4 py-2 sm:p-6 flex flex-col md:flex-row items-center sm:items-center justify-between gap-6">
        {/* Left - Modes */}
        <div className="grid grid-cols-2 gap-4 flex-1 h-auto px-12 py-6 relative mt-8">
          <div className="transform rotate-[10deg] scale-105 col-span-2 sm:col-span-1 ">
            <Card>
              <CardContent className="flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#b24c30] to-[#d11313]">
                <h2 className="text-xl font-bold">Hard Mode</h2>
                <h3 className="font-bold text-8xl jersey_10_8cf6801b-module__g70_MG__className">
                  3X
                </h3>
                <p className="text-sm text-center">
                  Conquer hard mode and reap 3x points for every correct answer.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="transform rotate-[-4deg] scale-100 col-span-2 sm:col-span-1">
            <Card>
              <CardContent className="flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#d6db3d] to-[#f9ac38]">
                <h2 className="text-xl font-bold">Medium Mode</h2>
                <h3 className="font-bold text-8xl jersey_10_8cf6801b-module__g70_MG__className">
                  2X
                </h3>
                <p className="text-sm text-center">
                  Challenge yourself with medium difficulty and earn 2x points.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="absolute top-36 sm:relative sm:top-0 transform rotate-[-10deg]  sm:col-span-2">
            <Card>
              <CardContent className="flex flex-col items-center justify-around p-5 rounded-lg text-white shadow-lg bg-gradient-to-br from-[#43e97b] to-[#38f9d7]">
                <h2 className="text-xl font-bold">Easy Mode</h2>
                <h3 className="font-bold text-8xl jersey_10_8cf6801b-module__g70_MG__className">
                  1X
                </h3>
                <p className="text-sm text-center">
                  Start with easy mode and earn 1x points for every correct
                  answer.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right - Message */}
        <div className="flex-1 flex flex-col px-4 py-2 max-w-[90%] lg:max-w-lg space-y-6 text-center lg:text-left">
          <div className="flex flex-col space-y-2">
            <h2 className="text-slate-800 font-bold text-3xl lg:text-4xl">
              Choose Your Challenge
            </h2>

            <p className="text-slate-600 text-lg leading-7">
              Pick a difficulty level to match your confidence and skill. Easy
              mode earns 1x points, medium doubles your reward with 2x points,
              and hard triples your score for the ultimate test.
            </p>
          </div>
          <div>
            <Link
              href="/lobby"
              className="bg-gradient-to-br from-primary to-[#7116bb] text-white py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition"
            >
              Test Your Knowledge
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-gray-100 w-full py-10 px-4 sm:px-8 lg:px-16">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
              Leaderboard
            </h2>
            <p className="text-lg text-slate-600 mt-2">
              See where you rank among other players. Compete, climb, and{' '}
              <span className="inline-flex items-center space-x-1 text-[#ff5858] font-semibold border-[#e78989] text-shadow-[0_0_2px_#fff,0_0_5px_#ff5858,0_0_15px_#ff5858,0_0_30px_#ff5858] animate-pulse duration-1000">
                <span> rise</span>
                <TrendingUp className="text-xl" />
              </span>
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#ff5858] to-[#FFD700] text-white">
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">
                    Player
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-semibold">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Example Rows */}
                <tr className="border-b">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    1
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">John Doe</td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900 font-bold">
                    289
                  </td>
                </tr>
                <tr className="bg-gray-50 border-b">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    2
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900 font-bold">
                    134
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    3
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Michael Brown
                  </td>
                  <td className="px-6 py-4 text-sm text-right text-gray-900 font-bold">
                    47
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex justify-center">
            <Link
              href="/leaderboard"
              className="text-lg text-[#ff5858] font-semibold hover:underline mt-4 inline-block"
            >
              View Full Leaderboard
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-[#1c1c1c] text-white py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left: Quick Links */}
            <div className="items-center">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/sign-in" className="hover:text-[#ff5858]">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/sign-up" className="hover:text-[#ff5858]">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="hover:text-[#ff5858]">
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link href="/lobby" className="hover:text-[#ff5858]">
                    Play
                  </Link>
                </li>
              </ul>
            </div>

            {/* Middle: Social Media */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  className="text-white hover:text-[#ff5858]"
                >
                  <Facebook />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-white hover:text-[#ff5858]"
                >
                  <Twitter />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="text-white hover:text-[#ff5858]"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-white hover:text-[#ff5858]"
                >
                  <Linkedin />
                </Link>
              </div>
            </div>

            {/* Right: Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <Link
                href="mailto:anel.sahovic.bsc@gmail.com"
                className="text-sm hover:text-[#ff5858]"
              >
                anel.sahovic.bsc@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center py-4 border-t border-[#333] mt-8">
          <p className="text-sm">
            &copy; 2024 anelsahovic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
