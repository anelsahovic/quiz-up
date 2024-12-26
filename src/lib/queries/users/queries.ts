import prisma from '@/lib/db';
import { subMonths, format, startOfMonth, eachMonthOfInterval } from 'date-fns';

export async function getUserFromDb(email: string) {
  try {
    return await prisma.user.findUnique({
      where: { email: email },
    });
  } catch (error) {}
}

export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    return [];
  }
};

// Fetch user by ID
export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {}
}

// Fetch user by Clerk ID
// export async function getUserByClerkId(clerkUserId: string) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: { clerkUserId: clerkUserId },
//     });
//     if (!user) {
//       throw new Error('User not found');
//     }
//     return user;
//   } catch (error) {}
// }

// export async function getUserByClerkIdWithRetry(clerkUserId: string) {
//   let isUser = false;
//   while (!isUser) {
//     try {
//       const user = await prisma.user.findUnique({
//         where: { clerkUserId: clerkUserId },
//       });

//       if (user) {
//         isUser = true;
//         return user; // User found
//       }
//     } catch (error) {}
//   }
// }

export async function getUserName(userId: string) {
  return await prisma.user.findUnique({
    where: { id: userId },
    select: {
      name: true,
    },
  });
}

export async function getUsersByMonth() {
  try {
    // Get the current date and calculate the start of 6 months ago
    const sixMonthsAgo = subMonths(new Date(), 6);
    const startDate = startOfMonth(sixMonthsAgo); // Start of 6 months ago
    const endDate = new Date(); // Use today's date as the end date

    return await prisma.user.groupBy({
      by: ['createdAt'],
      _count: {
        id: true,
      },
      where: {
        createdAt: {
          gte: startDate, // Users created from 6 months ago onwards
          lte: endDate, // To the current date (today)
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  } catch (error) {
    return [];
  }
}

const generateMonthRange = (date: Date, months: number) => {
  const start = subMonths(date, months); // Subtract months to get the starting month
  const end = new Date(); // Use today's date as the end date
  return eachMonthOfInterval({ start, end });
};

export async function getUsersChartData() {
  const users = await getUsersByMonth();
  const chartData: { month: string; players: number }[] = [];

  // Generate all months in the last 6 months including this month
  const allMonths = generateMonthRange(new Date(), 6); // Generate for the last 6 months

  // Map over the months and associate them with user counts
  const monthMap = new Map<string, number>();

  // Group user registrations by month
  users.forEach((registration) => {
    const month = format(registration.createdAt, 'yyyy-MM'); // Format as 'yyyy-MM'
    monthMap.set(month, registration._count.id);
  });

  // Prepare chart data for each month
  allMonths.forEach((month) => {
    const formattedMonth = format(month, 'yyyy-MM'); // Format the month for the chart (e.g., '2024-06')
    chartData.push({
      month: formattedMonth,
      players: monthMap.get(formattedMonth) || 0, // If no users for the month, set players to 0
    });
  });

  return chartData;
}
