import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// const questions: Prisma.QuestionCreateInput[] = [
//   // Sport
//   {
//     question: 'Which country hosted the 2016 Summer Olympics?',
//     options: ['Brazil', 'China', 'Russia', 'USA'],
//     correctAnswer: 0,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Sport' },
//         create: { name: 'Sport' },
//       },
//     },
//   },
//   {
//     question: 'Who won the 2022 FIFA World Cup?',
//     options: ['Argentina', 'France', 'Germany', 'Brazil'],
//     correctAnswer: 0,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Sport' },
//         create: { name: 'Sport' },
//       },
//     },
//   },
//   {
//     question: 'Which tennis player has won the most Grand Slam titles?',
//     options: [
//       'Roger Federer',
//       'Rafael Nadal',
//       'Novak Djokovic',
//       'Pete Sampras',
//     ],
//     correctAnswer: 2,
//     difficulty: 'MEDIUM',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Sport' },
//         create: { name: 'Sport' },
//       },
//     },
//   },
//   {
//     question: 'In which city were the 2008 Summer Olympics held?',
//     options: ['Beijing', 'London', 'Sydney', 'Athens'],
//     correctAnswer: 0,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Sport' },
//         create: { name: 'Sport' },
//       },
//     },
//   },
//   {
//     question: 'Who holds the record for the most goals scored in a World Cup?',
//     options: ['Marta', 'Pele', 'Cristiano Ronaldo', 'Miroslav Klose'],
//     correctAnswer: 3,
//     difficulty: 'HARD',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Sport' },
//         create: { name: 'Sport' },
//       },
//     },
//   },

//   // Science
//   {
//     question: 'What is the chemical symbol for water?',
//     options: ['O2', 'H2O', 'CO2', 'HO2'],
//     correctAnswer: 1,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Science' },
//         create: { name: 'Science' },
//       },
//     },
//   },
//   {
//     question: 'Which planet is known as the Red Planet?',
//     options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
//     correctAnswer: 0,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Science' },
//         create: { name: 'Science' },
//       },
//     },
//   },
//   {
//     question: 'What is the most common element in the Earth’s crust?',
//     options: ['Oxygen', 'Silicon', 'Iron', 'Magnesium'],
//     correctAnswer: 1,
//     difficulty: 'MEDIUM',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Science' },
//         create: { name: 'Science' },
//       },
//     },
//   },
//   {
//     question: 'What is the atomic number of carbon?',
//     options: ['6', '8', '12', '16'],
//     correctAnswer: 0,
//     difficulty: 'MEDIUM',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Science' },
//         create: { name: 'Science' },
//       },
//     },
//   },
//   {
//     question: 'Who is considered the father of modern physics?',
//     options: [
//       'Isaac Newton',
//       'Albert Einstein',
//       'Galileo Galilei',
//       'Nikola Tesla',
//     ],
//     correctAnswer: 1,
//     difficulty: 'HARD',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Science' },
//         create: { name: 'Science' },
//       },
//     },
//   },

//   // Movies
//   {
//     question: 'Which movie won the Academy Award for Best Picture in 2020?',
//     options: ['1917', 'Joker', 'Parasite', 'Once Upon a Time in Hollywood'],
//     correctAnswer: 2,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Movies' },
//         create: { name: 'Movies' },
//       },
//     },
//   },
//   {
//     question: 'Who played the character of Jack Dawson in Titanic?',
//     options: ['Johnny Depp', 'Brad Pitt', 'Leonardo DiCaprio', 'Tom Cruise'],
//     correctAnswer: 2,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Movies' },
//         create: { name: 'Movies' },
//       },
//     },
//   },
//   {
//     question:
//       'Which movie featured the famous line, "May the Force be with you"?',
//     options: ['Star Wars', 'Jurassic Park', 'Indiana Jones', 'The Matrix'],
//     correctAnswer: 0,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Movies' },
//         create: { name: 'Movies' },
//       },
//     },
//   },
//   {
//     question: 'In which movie would you find the character "Forrest Gump"?',
//     options: [
//       'Forrest Gump',
//       'The Green Mile',
//       'Cast Away',
//       'Saving Private Ryan',
//     ],
//     correctAnswer: 0,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Movies' },
//         create: { name: 'Movies' },
//       },
//     },
//   },
//   {
//     question: 'Which movie won the Best Picture Oscar in 1994?',
//     options: [
//       'The Shawshank Redemption',
//       'Forrest Gump',
//       'Pulp Fiction',
//       'The Lion King',
//     ],
//     correctAnswer: 1,
//     difficulty: 'MEDIUM',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Movies' },
//         create: { name: 'Movies' },
//       },
//     },
//   },

//   // Geography
//   {
//     question: 'What is the capital of Australia?',
//     options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
//     correctAnswer: 2,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Geography' },
//         create: { name: 'Geography' },
//       },
//     },
//   },
//   {
//     question: 'Which country is known as the Land of the Rising Sun?',
//     options: ['South Korea', 'China', 'Japan', 'India'],
//     correctAnswer: 2,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Geography' },
//         create: { name: 'Geography' },
//       },
//     },
//   },
//   {
//     question: 'What is the longest river in the world?',
//     options: ['Amazon River', 'Nile River', 'Yangtze River', 'Ganges River'],
//     correctAnswer: 1,
//     difficulty: 'MEDIUM',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Geography' },
//         create: { name: 'Geography' },
//       },
//     },
//   },
//   {
//     question: 'Which continent is the Sahara Desert located on?',
//     options: ['Asia', 'Africa', 'Australia', 'South America'],
//     correctAnswer: 1,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Geography' },
//         create: { name: 'Geography' },
//       },
//     },
//   },
//   {
//     question: 'Which country has the most time zones?',
//     options: ['United States', 'Russia', 'China', 'Australia'],
//     correctAnswer: 1,
//     difficulty: 'HARD',
//     category: {
//       connectOrCreate: {
//         where: { name: 'Geography' },
//         create: { name: 'Geography' },
//       },
//     },
//   },

//   // History
//   {
//     question: 'Who was the first President of the United States?',
//     options: [
//       'Abraham Lincoln',
//       'George Washington',
//       'Thomas Jefferson',
//       'John Adams',
//     ],
//     correctAnswer: 1,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'History' },
//         create: { name: 'History' },
//       },
//     },
//   },
//   {
//     question: 'In which year did World War I begin?',
//     options: ['1912', '1914', '1916', '1918'],
//     correctAnswer: 1,
//     difficulty: 'EASY',
//     category: {
//       connectOrCreate: {
//         where: { name: 'History' },
//         create: { name: 'History' },
//       },
//     },
//   },
//   {
//     question: 'Who was the leader of Nazi Germany during World War II?',
//     options: [
//       'Joseph Stalin',
//       'Adolf Hitler',
//       'Benito Mussolini',
//       'Winston Churchill',
//     ],
//     correctAnswer: 1,
//     difficulty: 'MEDIUM',
//     category: {
//       connectOrCreate: {
//         where: { name: 'History' },
//         create: { name: 'History' },
//       },
//     },
//   },
//   {
//     question: 'The fall of the Berlin Wall happened in which year?',
//     options: ['1985', '1989', '1991', '1995'],
//     correctAnswer: 1,
//     difficulty: 'MEDIUM',
//     category: {
//       connectOrCreate: {
//         where: { name: 'History' },
//         create: { name: 'History' },
//       },
//     },
//   },
//   {
//     question: 'Which empire was ruled by Julius Caesar?',
//     options: [
//       'Roman Empire',
//       'Ottoman Empire',
//       'British Empire',
//       'Byzantine Empire',
//     ],
//     correctAnswer: 0,
//     difficulty: 'HARD',
//     category: {
//       connectOrCreate: {
//         where: { name: 'History' },
//         create: { name: 'History' },
//       },
//     },
//   },
// ];
const questions: Prisma.QuestionCreateInput[] = [
  // Sport
  {
    question: 'Which country hosted the 2016 Summer Olympics?',
    options: ['Brazil', 'China', 'Russia', 'USA'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Who won the 2022 FIFA World Cup?',
    options: ['Argentina', 'France', 'Germany', 'Brazil'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which tennis player has won the most Grand Slam titles?',
    options: [
      'Roger Federer',
      'Rafael Nadal',
      'Novak Djokovic',
      'Pete Sampras',
    ],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'In which city were the 2008 Summer Olympics held?',
    options: ['Beijing', 'London', 'Sydney', 'Athens'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Who holds the record for the most goals scored in a World Cup?',
    options: ['Marta', 'Pele', 'Cristiano Ronaldo', 'Miroslav Klose'],
    correctAnswer: 3,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which country is known as the birthplace of the Olympic Games?',
    options: ['France', 'Italy', 'Greece', 'USA'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Who is the all-time top scorer in the NBA?',
    options: [
      'Michael Jordan',
      'Kareem Abdul-Jabbar',
      'LeBron James',
      'Kobe Bryant',
    ],
    correctAnswer: 1,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which country won the first Rugby World Cup in 1987?',
    options: ['New Zealand', 'Australia', 'South Africa', 'England'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What sport is played at Wimbledon?',
    options: ['Tennis', 'Football', 'Basketball', 'Baseball'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Who won the first-ever Formula 1 World Championship in 1950?',
    options: [
      'Juan Manuel Fangio',
      'Alberto Ascari',
      'Giuseppe Farina',
      'Stirling Moss',
    ],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },

  // Science
  {
    question: 'What is the chemical symbol for water?',
    options: ['O2', 'H2O', 'CO2', 'HO2'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the most common element in the Earth’s crust?',
    options: ['Oxygen', 'Silicon', 'Iron', 'Magnesium'],
    correctAnswer: 1,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the atomic number of carbon?',
    options: ['6', '8', '12', '16'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'Who is considered the father of modern physics?',
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Galileo Galilei',
      'Nikola Tesla',
    ],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'Which element has the chemical symbol "Fe"?',
    options: ['Iron', 'Flerovium', 'Fluorine', 'Francium'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question:
      'Which gas do plants absorb from the atmosphere for photosynthesis?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question:
      'Which organ is responsible for pumping blood throughout the human body?',
    options: ['Liver', 'Brain', 'Heart', 'Lungs'],
    correctAnswer: 2,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the process by which plants make their own food?',
    options: ['Respiration', 'Photosynthesis', 'Digestion', 'Reproduction'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },

  // Movies
  {
    question: 'Which movie won the Academy Award for Best Picture in 2020?',
    options: ['1917', 'Joker', 'Parasite', 'Once Upon a Time in Hollywood'],
    correctAnswer: 2,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Who played the character of Jack Dawson in Titanic?',
    options: ['Johnny Depp', 'Brad Pitt', 'Leonardo DiCaprio', 'Tom Cruise'],
    correctAnswer: 2,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question:
      'Which movie featured the famous line, "May the Force be with you"?',
    options: ['Star Wars', 'Jurassic Park', 'Indiana Jones', 'The Matrix'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'In which movie would you find the character "Forrest Gump"?',
    options: [
      'Forrest Gump',
      'The Green Mile',
      'Cast Away',
      'Saving Private Ryan',
    ],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Which movie won the Best Picture Oscar in 1994?',
    options: [
      'The Shawshank Redemption',
      'Forrest Gump',
      'Pulp Fiction',
      'The Lion King',
    ],
    correctAnswer: 1,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Which movie features a character named “Darth Vader”?',
    options: ['Star Wars', 'Blade Runner', 'The Terminator', 'Alien'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Who directed the movie “Inception”?',
    options: [
      'Christopher Nolan',
      'Steven Spielberg',
      'James Cameron',
      'Martin Scorsese',
    ],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Which movie won the Academy Award for Best Picture in 1998?',
    options: [
      'Titanic',
      'The English Patient',
      'Shakespeare in Love',
      'Saving Private Ryan',
    ],
    correctAnswer: 3,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question:
      'In which movie did Brad Pitt play the character of “Tyler Durden”?',
    options: ['Fight Club', 'Se7en', 'Ocean’s Eleven', 'Inglourious Basterds'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Which animated movie features a talking snowman named Olaf?',
    options: ['Frozen', 'Moana', 'Toy Story', 'Shrek'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },

  // Geography
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 2,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['South Korea', 'China', 'Japan', 'India'],
    correctAnswer: 2,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the longest river in the world?',
    options: ['Amazon River', 'Nile River', 'Yangtze River', 'Ganges River'],
    correctAnswer: 1,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which continent is the Sahara Desert located on?',
    options: ['Asia', 'Africa', 'Australia', 'South America'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country has the most time zones?',
    options: ['USA', 'Russia', 'China', 'India'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which is the smallest country in the world?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the capital city of Canada?',
    options: ['Vancouver', 'Ottawa', 'Toronto', 'Montreal'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country is the largest by land area?',
    options: ['Russia', 'Canada', 'China', 'USA'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which mountain is the highest in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Mount Kilimanjaro'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which continent is known as the “Dark Continent”?',
    options: ['Asia', 'Africa', 'South America', 'Europe'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },

  // History
  {
    question: 'Who was the first president of the United States?',
    options: [
      'Thomas Jefferson',
      'George Washington',
      'Abraham Lincoln',
      'John Adams',
    ],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Who was the first emperor of China?',
    options: ['Qin Shi Huang', 'Emperor Wu', 'Emperor Gaozu', 'Han Wudi'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'What year did World War I begin?',
    options: ['1912', '1914', '1916', '1918'],
    correctAnswer: 1,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Who was the British Prime Minister during World War II?',
    options: [
      'Winston Churchill',
      'Neville Chamberlain',
      'Clement Attlee',
      'Edward Heath',
    ],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'In which year did the Titanic sink?',
    options: ['1905', '1910', '1912', '1920'],
    correctAnswer: 2,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Which ancient civilization built the pyramids of Giza?',
    options: ['Egyptians', 'Mayans', 'Romans', 'Greeks'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Who was the first woman to fly solo across the Atlantic?',
    options: [
      'Amelia Earhart',
      'Bessie Coleman',
      'Jacqueline Cochran',
      'Harriet Quimby',
    ],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'What year did the Berlin Wall fall?',
    options: ['1985', '1987', '1989', '1991'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Who was the famous queen of ancient Egypt?',
    options: ['Cleopatra', 'Nefertiti', 'Hatshepsut', 'Ramses'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'What was the name of the ship that brought the Pilgrims to America in 1620?',
    options: ['Mayflower', 'Nina', 'Santa Maria', 'Discovery'],
    correctAnswer: 0,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
];

async function main() {
  console.log('Start seeding...');

  for (const question of questions) {
    await prisma.question.create({
      data: question,
    });
  }

  console.log('Seeding finished.');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
