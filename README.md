# Quiz-Up

Quiz-Up is a feature-rich quiz application built with Next.js 15, TypeScript, and Prisma. The app allows users to test their knowledge across various categories, track their performance, and compete on leaderboards. It is deployed on Vercel at [anelsahovic-quiz-up.vercel.app](https://anelsahovic-quiz-up.vercel.app/).

## Features

### User Authentication

- **Auth.js Integration**: Switched to Auth.js for seamless authentication.
- **Google Authentication**: Users can log in using their Google accounts.
- **Credentials Auth**: Added support for credential-based authentication.

### Quiz Functionality

- **Lobby System**: Users can configure quiz settings in the lobby before starting a quiz.
- **Dynamic Questions**: Updated question seed data to provide a variety of questions.
- **Categories and Difficulty Levels**: Questions are categorized and assigned difficulty levels for a tailored experience.

### Leaderboards

- **Sorting Algorithm**: Implemented leaderboard functionality with real-time sorting to rank users based on their performance.

### Dashboard for Admins

- **CRUD Operations**: Full backend and frontend CRUD implementation for managing questions, users, and categories.
- **Analytics**: Dashboard includes data analytics for tracking user activities and app metrics.
- **Responsive Design**: Ensured compatibility across devices for the admin dashboard.

### User Profile

- **My Profile Page**: Users can view and edit their profile information.
- **Sync with Database**: User data is synced with the database using Clerk webhooks.

### Responsive Design

- Designed and implemented responsive pages for seamless user experience on all device sizes:
  - Landing Page
  - Home Page
  - Profile Page

## Technical Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **Backend**: Prisma, PostgreSQL (via Supabase)
- **Authentication**: Clerk (initial setup) migrated to Auth.js
- **Deployment**: Vercel

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/anelsahovic/quiz-up.git
   cd quiz-up
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database:
   - Configure the `.env` file with your database credentials.
   - Run migrations:
     ```bash
     npx prisma migrate dev
     ```
4. Seed the database:
   ```bash
   npx prisma db seed
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser at `http://localhost:3000`.

## Deployment

The app is deployed on Vercel. To deploy your version:

1. Connect the repository to your Vercel account.
2. Set up the required environment variables.
3. Deploy with a single click.

## Contribution

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push to your fork.
4. Submit a pull request.

## Acknowledgments

Special thanks to all libraries and frameworks that made this project possible:

- Next.js
- Prisma
- Tailwind CSS
- Clerk/Auth.js

---

Feel free to explore the app and start your quiz journey today at [anelsahovic-quiz-up.vercel.app](https://anelsahovic-quiz-up.vercel.app/).
