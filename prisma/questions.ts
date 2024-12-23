// Now generate me 60 questions with correct answers for geography separated in 3 difficulties

import { Prisma } from '@prisma/client';

// Now transform all of it into this structure. You can start with 20 easy questions first .  {
//   question: 'Which empire was ruled by Charlemagne in the 9th century?',
//   options: ['Roman Empire', 'Holy Roman Empire', 'Ottoman Empire', 'Byzantine Empire'],
//   correctAnswer: 1,
//   difficulty: 'HARD',
//   category: {
//     connectOrCreate: {
//       where: { name: 'History' },
//       create: { name: 'History' },
//     },
//   },
// },

export const historyQuestions: Prisma.QuestionCreateInput[] = [
  {
    question: 'Who was the first President of the United States?',
    options: [
      'George Washington',
      'Thomas Jefferson',
      'Abraham Lincoln',
      'John Adams',
    ],
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
    question: 'In which year did the Titanic sink?',
    options: ['1910', '1912', '1915', '1918'],
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
    question:
      'What is the name of the ship that brought the Pilgrims to America in 1620?',
    options: ['Santa Maria', 'Mayflower', 'Endeavour', 'Victory'],
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
    question: 'Who was the first man to walk on the moon?',
    options: ['Buzz Aldrin', 'Alan Shepard', 'Yuri Gagarin', 'Neil Armstrong'],
    correctAnswer: 3,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'During which war was the Battle of Gettysburg fought?',
    options: [
      'World War I',
      'American Civil War',
      'World War II',
      'Spanish-American War',
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
    question: 'Who invented the light bulb?',
    options: [
      'Alexander Graham Bell',
      'Nikola Tesla',
      'Thomas Edison',
      'Benjamin Franklin',
    ],
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
    question: 'In what year did World War I begin?',
    options: ['1912', '1914', '1916', '1918'],
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
    question: 'Who was the leader of Nazi Germany during World War II?',
    options: [
      'Joseph Stalin',
      'Benito Mussolini',
      'Adolf Hitler',
      'Winston Churchill',
    ],
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
    question: 'What year did the Berlin Wall fall?',
    options: ['1985', '1989', '1991', '1995'],
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
    question:
      'Which country was ruled by Queen Elizabeth I in the 16th century?',
    options: ['France', 'Spain', 'England', 'Portugal'],
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
    question:
      'Who was the famous scientist who developed the theory of relativity?',
    options: [
      'Isaac Newton',
      'Albert Einstein',
      'Nikola Tesla',
      'Galileo Galilei',
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
    question:
      'What was the name of the first human-made satellite launched into space?',
    options: ['Sputnik 1', 'Apollo 11', 'Vostok 1', 'Explorer 1'],
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
    question: 'Who was the first emperor of China?',
    options: ['Han Wudi', 'Qin Shi Huang', 'Emperor Gaozu', 'Emperor Taizong'],
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
    question:
      'In what year did Christopher Columbus first arrive in the Americas?',
    options: ['1492', '1519', '1607', '1620'],
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
    question: 'Who is credited with the discovery of America in 1492?',
    options: [
      'Christopher Columbus',
      'John Cabot',
      'Leif Erikson',
      'Amerigo Vespucci',
    ],
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
    question: 'What ancient civilization built the pyramids in Egypt?',
    options: ['Mesopotamians', 'Ancient Egyptians', 'Romans', 'Greeks'],
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
    question:
      'Who was the famous civil rights leader who gave the "I Have a Dream" speech?',
    options: [
      'Rosa Parks',
      'Malcolm X',
      'Martin Luther King Jr.',
      'Frederick Douglass',
    ],
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
    question: 'In which year did the United States declare independence?',
    options: ['1776', '1781', '1800', '1820'],
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
    question: 'Which country was ruled by the pharaohs in ancient times?',
    options: ['Greece', 'Rome', 'Egypt', 'Persia'],
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
    question: 'Who was the first woman to fly solo across the Atlantic?',
    options: [
      'Amelia Earhart',
      'Bessie Coleman',
      'Ellen Church',
      'Harriet Quimby',
    ],
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
    options: ['Mayflower', 'Santa Maria', 'Endeavour', 'Victoria'],
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
    question:
      'Which organization was founded in 1949 to provide collective security against the Soviet Union?',
    options: ['NATO', 'United Nations', 'League of Nations', 'Warsaw Pact'],
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
    question:
      'The Magna Carta, signed in 1215, was important because it limited the power of which person?',
    options: ['King John', 'Henry VIII', 'Richard the Lionheart', 'Edward I'],
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
    question: 'Who was the leader of the Soviet Union during World War II?',
    options: [
      'Leon Trotsky',
      'Joseph Stalin',
      'Nikita Khrushchev',
      'Mikhail Gorbachev',
    ],
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
    question:
      'The Battle of Hastings in 1066 marked the beginning of Norman rule in which country?',
    options: ['England', 'France', 'Germany', 'Italy'],
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
    question:
      'Which treaty ended World War I and imposed heavy reparations on Germany?',
    options: [
      'Treaty of Versailles',
      'Treaty of Paris',
      'Treaty of Ghent',
      'Treaty of Tordesillas',
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
    question: 'Who was the leader of France during the French Revolution?',
    options: [
      'Napoleon Bonaparte',
      'Louis XVI',
      'Charles de Gaulle',
      'Robespierre',
    ],
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
    question:
      'Which battle marked the end of Napoleon Bonaparte’s rule in Europe?',
    options: [
      'Battle of Waterloo',
      'Battle of Trafalgar',
      'Battle of Austerlitz',
      'Battle of Leipzig',
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
    question:
      'Which of the following is associated with the period known as the Renaissance?',
    options: ['Scientific revolution', 'Feudalism', 'Baroque art', 'Humanism'],
    correctAnswer: 3,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'Vladimir Lenin was the leader of which country during the Russian Revolution?',
    options: ['Russia', 'China', 'Germany', 'France'],
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
    question: 'In which year did World War II end?',
    options: ['1940', '1941', '1945', '1950'],
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
    question: 'Who was the first Queen of England to rule in her own right?',
    options: ['Mary I', 'Elizabeth I', 'Victoria', 'Anne'],
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
    question:
      'Which ancient civilization is credited with creating the first known form of writing?',
    options: ['Mesopotamians', 'Egyptians', 'Greeks', 'Romans'],
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
    question:
      'Which leader led the struggle for independence in South Africa and became its first black president?',
    options: [
      'Desmond Tutu',
      'Nelson Mandela',
      'Robert Mugabe',
      'Oliver Tambo',
    ],
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
    question: 'The Berlin Wall fell in which year?',
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
    question:
      'The ancient city of Pompeii was destroyed by an eruption of which volcano?',
    options: ['Vesuvius', 'Etna', 'Krakatoa', 'Mount St. Helens'],
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
    question: 'Which of these was an ancient civilization of Mexico?',
    options: ['Aztec', 'Inca', 'Mayan', 'All of the above'],
    correctAnswer: 3,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'The Battle of Hastings in 1066 was fought between the Normans and which other group?',
    options: ['Vikings', 'Saxons', 'Celts', 'Romans'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'Which Tsar of Russia is known for his efforts to modernize and westernize the country in the 17th century?',
    options: [
      'Peter the Great',
      'Catherine the Great',
      'Ivan the Terrible',
      'Nicholas II',
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
    question: 'Who was the first emperor of the Roman Empire?',
    options: ['Julius Caesar', 'Augustus', 'Nerva', 'Tiberius'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Which of these events led to the fall of the Roman Empire?',
    options: [
      'The Battle of Hastings',
      'The assassination of Julius Caesar',
      'The rise of Christianity',
      'Barbarian invasions',
    ],
    correctAnswer: 3,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Who was the first person to successfully sail around the world?',
    options: [
      'Vasco da Gama',
      'Christopher Columbus',
      'Ferdinand Magellan',
      'John Cabot',
    ],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'Which famous philosopher wrote "Meditations" while serving as Roman Emperor?',
    options: ['Aristotle', 'Socrates', 'Marcus Aurelius', 'Plato'],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'Which war was fought between the United States and Mexico in the 19th century?',
    options: [
      'The American Revolution',
      'The Civil War',
      'The War of 1812',
      'The Mexican-American War',
    ],
    correctAnswer: 3,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'The Black Death, which killed millions in the 14th century, was caused by which disease?',
    options: ['Smallpox', 'Malaria', 'Bubonic plague', 'Tuberculosis'],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'Which explorer is credited with being the first European to reach India by sea?',
    options: [
      'Christopher Columbus',
      'Vasco da Gama',
      'Ferdinand Magellan',
      'Marco Polo',
    ],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'The ancient empire of Mesopotamia was centered around which two rivers?',
    options: [
      'Amazon and Nile',
      'Tigris and Euphrates',
      'Indus and Ganges',
      'Yangtze and Yellow',
    ],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Who was the dictator of Nazi Germany during World War II?',
    options: [
      'Joseph Stalin',
      'Benito Mussolini',
      'Adolf Hitler',
      'Winston Churchill',
    ],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question:
      'Which country was the origin of the first true form of democracy?',
    options: ['Rome', 'Greece', 'France', 'United States'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
  {
    question: 'Who is known as the father of modern philosophy?',
    options: ['René Descartes', 'Socrates', 'John Locke', 'David Hume'],
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
    question: 'Which empire was ruled by Charlemagne in the 9th century?',
    options: [
      'Roman Empire',
      'Holy Roman Empire',
      'Ottoman Empire',
      'Byzantine Empire',
    ],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'History' },
        create: { name: 'History' },
      },
    },
  },
];

export const geographyQuestions: Prisma.QuestionCreateInput[] = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Rome', 'Berlin', 'Madrid'],
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
    question: 'Which continent is Egypt located on?',
    options: ['Africa', 'Asia', 'Europe', 'Australia'],
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
    question: 'What is the largest ocean in the world?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Pacific Ocean',
      'Arctic Ocean',
    ],
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
    question: 'Which country is famous for the Eiffel Tower?',
    options: ['Italy', 'France', 'Spain', 'Germany'],
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
    question: 'What is the longest river in the world?',
    options: [
      'Amazon River',
      'Mississippi River',
      'Yangtze River',
      'Nile River',
    ],
    correctAnswer: 3,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the smallest country in the world?',
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
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'South Korea', 'Japan', 'Vietnam'],
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
    question: 'What is the official language of Brazil?',
    options: ['Spanish', 'Portuguese', 'French', 'English'],
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
    question: 'Which desert is the largest in the world?',
    options: [
      'Kalahari Desert',
      'Sahara Desert',
      'Gobi Desert',
      'Atacama Desert',
    ],
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
    question: 'What is the capital of Canada?',
    options: ['Toronto', 'Montreal', 'Ottawa', 'Vancouver'],
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
    question: 'Which continent is Australia part of?',
    options: ['Europe', 'Oceania', 'Asia', 'Africa'],
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
    question:
      'What is the name of the imaginary line dividing the Earth into Northern and Southern Hemispheres?',
    options: [
      'Prime Meridian',
      'Tropic of Cancer',
      'Equator',
      'Tropic of Capricorn',
    ],
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
    question: 'Which U.S. state is known as the Sunshine State?',
    options: ['California', 'Florida', 'Texas', 'Nevada'],
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
    question: 'What is the capital of the United Kingdom?',
    options: ['Edinburgh', 'London', 'Dublin', 'Cardiff'],
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
    question: 'What is the primary currency used in Europe?',
    options: ['Pound', 'Euro', 'Franc', 'Lira'],
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
    question: 'Which mountain range separates Europe and Asia?',
    options: ['Alps', 'Andes', 'Himalayas', 'Ural Mountains'],
    correctAnswer: 3,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country has the most people?',
    options: ['India', 'China', 'United States', 'Indonesia'],
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
    question: 'Which sea lies between Europe and Africa?',
    options: ['Caribbean Sea', 'Mediterranean Sea', 'Black Sea', 'Red Sea'],
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
    question: 'What is the capital of Italy?',
    options: ['Milan', 'Venice', 'Florence', 'Rome'],
    correctAnswer: 3,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country is famous for the Great Wall?',
    options: ['India', 'China', 'Japan', 'South Korea'],
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
    question: 'Which U.S. state has the nickname "The Last Frontier"?',
    options: ['Alaska', 'Hawaii', 'Montana', 'Wyoming'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country has the longest coastline in the world?',
    options: ['Russia', 'Canada', 'Australia', 'United States'],
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
    question: 'What is the capital of New Zealand?',
    options: ['Auckland', 'Christchurch', 'Wellington', 'Dunedin'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which African country has the largest population?',
    options: ['Egypt', 'Nigeria', 'South Africa', 'Ethiopia'],
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
    question: 'Which is the largest island in the world?',
    options: ['Madagascar', 'Borneo', 'Greenland', 'New Guinea'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'The Andes Mountains are primarily located on which continent?',
    options: ['North America', 'South America', 'Europe', 'Asia'],
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
    question:
      'What is the name of the largest desert in the world, excluding polar deserts?',
    options: [
      'Sahara Desert',
      'Kalahari Desert',
      'Gobi Desert',
      'Sonoran Desert',
    ],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the smallest U.S. state by land area?',
    options: ['Delaware', 'Connecticut', 'Rhode Island', 'Hawaii'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the largest country in South America by area?',
    options: ['Argentina', 'Brazil', 'Chile', 'Peru'],
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
    question:
      'Which European country has the most UNESCO World Heritage Sites?',
    options: ['France', 'Italy', 'Spain', 'Germany'],
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
    question: 'Which Asian country has the most islands?',
    options: ['Indonesia', 'Japan', 'Philippines', 'Malaysia'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which U.S. state is known as the "Land of 10,000 Lakes"?',
    options: ['Wisconsin', 'Michigan', 'Minnesota', 'North Dakota'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the capital of Turkey?',
    options: ['Istanbul', 'Ankara', 'Izmir', 'Bursa'],
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
    question: 'Which sea is the saltiest in the world?',
    options: ['Red Sea', 'Caspian Sea', 'Dead Sea', 'Mediterranean Sea'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country shares the longest border with the United States?',
    options: ['Mexico', 'Canada', 'Russia', 'Cuba'],
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
    question: 'What is the capital of South Korea?',
    options: ['Seoul', 'Busan', 'Incheon', 'Daegu'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the name of the deepest point in the ocean?',
    options: [
      'Mariana Trench',
      'Puerto Rico Trench',
      'Tonga Trench',
      'Java Trench',
    ],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the official language of Switzerland?',
    options: ['German', 'French', 'Italian', 'All of the above'],
    correctAnswer: 3,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which river flows through the Grand Canyon?',
    options: [
      'Mississippi River',
      'Colorado River',
      'Rio Grande',
      'Snake River',
    ],
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
    question: 'What is the name of the longest mountain range in the world?',
    options: ['Himalayas', 'Andes', 'Rocky Mountains', 'Alps'],
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
    question: 'What is the highest mountain in Antarctica?',
    options: ['Mount Erebus', 'Mount Sidley', 'Vinson Massif', 'Mount Jackson'],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question:
      'Which country is home to the Danakil Depression, one of the hottest places on Earth?',
    options: ['Ethiopia', 'Djibouti', 'Sudan', 'Eritrea'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question:
      'Lake Baikal is the deepest lake in the world. In which country is it located?',
    options: ['Mongolia', 'Russia', 'Kazakhstan', 'China'],
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
    question: 'Which country has the most active volcanoes in the world?',
    options: ['Japan', 'United States', 'Indonesia', 'Philippines'],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the southernmost city in the world?',
    options: ['Ushuaia', 'Puerto Williams', 'Punta Arenas', 'Stanley'],
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
    question: 'Which desert is the largest in Australia?',
    options: [
      'Great Victoria Desert',
      'Simpson Desert',
      'Gibson Desert',
      'Great Sandy Desert',
    ],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question:
      'What is the only country through which both the Equator and the Tropic of Capricorn pass?',
    options: ['Brazil', 'Australia', 'Indonesia', 'Colombia'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which ocean current is the largest and fastest in the world?',
    options: [
      'Gulf Stream',
      'Kuroshio Current',
      'Antarctic Circumpolar Current',
      'California Current',
    ],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the second-largest country in Africa by area?',
    options: ['Algeria', 'Democratic Republic of Congo', 'Sudan', 'Libya'],
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
    question: 'Which sea is located between Saudi Arabia and Africa?',
    options: ['Mediterranean Sea', 'Red Sea', 'Arabian Sea', 'Dead Sea'],
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
    question:
      'What is the name of the largest inland body of water in the world?',
    options: ['Caspian Sea', 'Lake Superior', 'Lake Victoria', 'Aral Sea'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question:
      'Which river forms part of the border between Mexico and the United States?',
    options: [
      'Mississippi River',
      'Colorado River',
      'Rio Grande',
      'Hudson River',
    ],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which country has the most freshwater by volume?',
    options: ['Russia', 'Brazil', 'Canada', 'United States'],
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
    question:
      'What is the name of the region in northern India and Pakistan over which both countries have fought wars?',
    options: ['Punjab', 'Kashmir', 'Assam', 'Sindh'],
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
    question: 'Which is the largest island in the Mediterranean Sea?',
    options: ['Sicily', 'Cyprus', 'Crete', 'Corsica'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the capital of Bhutan?',
    options: ['Thimphu', 'Paro', 'Punakha', 'Phuentsholing'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'Which ocean is the smallest in the world?',
    options: [
      'Indian Ocean',
      'Atlantic Ocean',
      'Arctic Ocean',
      'Southern Ocean',
    ],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the official name of Myanmar’s largest river?',
    options: [
      'Irrawaddy River',
      'Salween River',
      'Mekong River',
      'Chindwin River',
    ],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
  {
    question: 'What is the northernmost capital city in the world?',
    options: ['Helsinki', 'Reykjavik', 'Oslo', 'Moscow'],
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
    question: 'Which country is known as the "Land of a Thousand Lakes"?',
    options: ['Canada', 'Norway', 'Finland', 'Sweden'],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Geography' },
        create: { name: 'Geography' },
      },
    },
  },
];

export const sportQuestions: Prisma.QuestionCreateInput[] = [
  {
    question: 'What sport is known as "the beautiful game"?',
    options: ['Soccer', 'Basketball', 'Cricket', 'Tennis'],
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
    question: 'In which sport would you perform a slam dunk?',
    options: ['Basketball', 'Soccer', 'Tennis', 'Baseball'],
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
    question:
      'What is the object hit back and forth in a game of badminton called?',
    options: ['Shuttlecock', 'Birdie', 'Ball', 'Puck'],
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
    question: 'How many players are on a baseball team on the field?',
    options: ['9', '10', '11', '8'],
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
    question: 'In golf, what is the term for one stroke under par on a hole?',
    options: ['Birdie', 'Eagle', 'Par', 'Bogey'],
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
    question: 'Which country has won the most FIFA World Cups?',
    options: ['Germany', 'Brazil', 'Italy', 'Argentina'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What sport is played at Wimbledon?',
    options: ['Tennis', 'Cricket', 'Rugby', 'Soccer'],
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
    question:
      'What is the highest possible score in a single frame of bowling?',
    options: ['30', '20', '40', '50'],
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
    question: 'What sport uses a pommel horse?',
    options: ['Gymnastics', 'Horse Racing', 'Fencing', 'Diving'],
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
    question: 'How many players are on a soccer team on the field?',
    options: ['11', '10', '12', '9'],
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
    question: 'What is the term for hitting a home run with all bases loaded?',
    options: ['Grand Slam', 'Hat Trick', 'Golden Run', 'Double'],
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
    question: 'In which sport do players aim to score goals with a puck?',
    options: ['Ice Hockey', 'Field Hockey', 'Basketball', 'Rugby'],
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
    question: 'What is the term for 3 strikes in a row in bowling?',
    options: ['Turkey', 'Triple', 'Strike Hat Trick', 'Golden Frame'],
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
    question: 'What sport is associated with the Ryder Cup?',
    options: ['Golf', 'Tennis', 'Cricket', 'Rugby'],
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
    question: 'In which sport would you find a "scrum"?',
    options: ['Rugby', 'Soccer', 'Cricket', 'Basketball'],
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
    question: 'What does NBA stand for?',
    options: [
      'National Basketball Association',
      'National Baseball Alliance',
      'New Basketball Authority',
      'National Ball Association',
    ],
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
    question: 'In which sport is a hat trick three goals by a single player?',
    options: ['Soccer', 'Basketball', 'Rugby', 'Hockey'],
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
    question: 'What is the object used to play table tennis?',
    options: ['Table Tennis Ball', 'Shuttlecock', 'Baseball', 'Puck'],
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
    question: 'What is the duration of a professional soccer match?',
    options: ['90 minutes', '80 minutes', '100 minutes', '60 minutes'],
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
    question: 'In tennis, what is a score of zero called?',
    options: ['Love', 'Zero', 'Nil', 'Blank'],
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
    question: 'Which country hosted the 2016 Summer Olympics?',
    options: ['Brazil', 'China', 'United Kingdom', 'Japan'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What is the only Grand Slam tennis tournament played on clay?',
    options: ['French Open', 'Wimbledon', 'US Open', 'Australian Open'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'In Formula 1 racing, how many wheels are on a car?',
    options: ['4', '6', '3', '5'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question:
      'Which country has won the most Olympic gold medals in ice hockey?',
    options: ['Canada', 'Russia', 'Sweden', 'United States'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What sport includes the terms "bogey," "birdie," and "eagle"?',
    options: ['Golf', 'Cricket', 'Baseball', 'Tennis'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What team won the first-ever Super Bowl in 1967?',
    options: [
      'Green Bay Packers',
      'Dallas Cowboys',
      'Kansas City Chiefs',
      'New York Jets',
    ],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What is the maximum score possible in a game of 10-pin bowling?',
    options: ['300', '250', '400', '200'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What is the diameter of a basketball hoop in inches?',
    options: ['18', '20', '16', '14'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which golfer has won the most major championships?',
    options: [
      'Jack Nicklaus',
      'Tiger Woods',
      'Arnold Palmer',
      'Phil Mickelson',
    ],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question:
      'What is the record for the most goals scored in a single FIFA World Cup tournament?',
    options: ['13', '10', '12', '11'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which country won the first-ever FIFA World Cup in 1930?',
    options: ['Uruguay', 'Brazil', 'Italy', 'Argentina'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which NBA team has the most championship wins?',
    options: [
      'Boston Celtics',
      'Los Angeles Lakers',
      'Chicago Bulls',
      'Golden State Warriors',
    ],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'How long is an Olympic swimming pool?',
    options: ['50 meters', '25 meters', '75 meters', '100 meters'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question:
      'Which athlete holds the record for the most Olympic gold medals?',
    options: ['Michael Phelps', 'Usain Bolt', 'Carl Lewis', 'Larisa Latynina'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What is the term for a tennis game that ends in a score of 6-0?',
    options: ['Bagel', 'Shutout', 'Love Game', 'Ace Game'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which country is known as the birthplace of modern rugby?',
    options: ['England', 'New Zealand', 'Australia', 'South Africa'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'In cricket, how many players are on a team?',
    options: ['11', '10', '12', '9'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question:
      'Who is the only athlete to play in a Super Bowl and a World Series?',
    options: ['Deion Sanders', 'Bo Jackson', 'Michael Jordan', 'Jim Thorpe'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'What is the name of the trophy awarded in the NHL championship?',
    options: ['Stanley Cup', 'Calder Cup', 'Presidents’ Trophy', 'Hart Trophy'],
    correctAnswer: 0,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which female tennis player has won the most Grand Slam titles?',
    options: [
      'Serena Williams',
      'Steffi Graf',
      'Margaret Court',
      'Martina Navratilova',
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
    question:
      'Which boxer holds the record for the most knockouts in a career?',
    options: ['Archie Moore', 'Joe Louis', 'Rocky Marciano', 'Mike Tyson'],
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
    question: 'Which country has won the most Rugby World Cup titles?',
    options: ['New Zealand', 'South Africa', 'Australia', 'England'],
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
    question: 'In which year did the first FIFA Women’s World Cup take place?',
    options: ['1991', '1995', '1987', '1999'],
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
    question: 'Which country has won the most Cricket World Cup titles?',
    options: ['Australia', 'India', 'West Indies', 'England'],
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
    question: 'Which NFL team has appeared in the most Super Bowls?',
    options: [
      'New England Patriots',
      'Pittsburgh Steelers',
      'Dallas Cowboys',
      'San Francisco 49ers',
    ],
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
    question: 'Which sport uses the term “butterfly stroke”?',
    options: ['Swimming', 'Gymnastics', 'Wrestling', 'Figure Skating'],
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
    question: 'What is the world record time for the men’s 100m sprint?',
    options: ['9.58 seconds', '9.72 seconds', '9.69 seconds', '9.55 seconds'],
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
    question:
      'Which golfer famously won The Open Championship with a wooden driver in 1957?',
    options: ['Bobby Locke', 'Peter Thomson', 'Ben Hogan', 'Gary Player'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
  {
    question: 'Which football club has the most UEFA Champions League titles?',
    options: ['Real Madrid', 'AC Milan', 'Bayern Munich', 'Barcelona'],
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
    question: 'Which athlete is known as “The Flying Finn”?',
    options: [
      'Paavo Nurmi',
      'Lasse Viren',
      'Kimi Räikkönen',
      'Eero Mäntyranta',
    ],
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
    question: 'Which country hosted the first Winter Olympics?',
    options: ['France', 'Switzerland', 'Austria', 'Norway'],
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
    question:
      'Which tennis player has spent the most weeks as world number one in ATP history?',
    options: [
      'Novak Djokovic',
      'Roger Federer',
      'Pete Sampras',
      'Rafael Nadal',
    ],
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
    question:
      'What is the maximum weight of a golf ball according to the rules?',
    options: ['1.62 ounces', '1.70 ounces', '1.50 ounces', '1.65 ounces'],
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
    question: 'Which NBA player is nicknamed “The Big Fundamental”?',
    options: [
      'Tim Duncan',
      'Kareem Abdul-Jabbar',
      'Shaquille O’Neal',
      'Kevin Garnett',
    ],
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
    question:
      'Which athlete is known for holding the title of the heaviest boxing world champion?',
    options: [
      'Nikolai Valuev',
      'George Foreman',
      'Sonny Liston',
      'Joe Frazier',
    ],
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
    question: 'In what year did the NBA introduce the three-point line?',
    options: ['1979', '1985', '1975', '1980'],
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
    question:
      'Which country won the FIFA World Cup during the infamous “Hand of God” match?',
    options: ['Argentina', 'England', 'Italy', 'Brazil'],
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
    question:
      'Which female gymnast scored a perfect 10 at the Olympics in 1976?',
    options: [
      'Nadia Comaneci',
      'Mary Lou Retton',
      'Larisa Latynina',
      'Olga Korbut',
    ],
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
    question: 'What is the highest possible break in snooker?',
    options: ['147', '155', '135', '140'],
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
    question:
      'Which football player has scored the most goals in international matches?',
    options: ['Cristiano Ronaldo', 'Ali Daei', 'Lionel Messi', 'Pele'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Sport' },
        create: { name: 'Sport' },
      },
    },
  },
];

export const movieQuestions: Prisma.QuestionCreateInput[] = [
  {
    question:
      'What is the name of the hobbit played by Elijah Wood in "The Lord of the Rings"?',
    options: [
      'Bilbo Baggins',
      'Frodo Baggins',
      'Samwise Gamgee',
      'Peregrin Took',
    ],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Who directed the movie "Titanic"?',
    options: [
      'Steven Spielberg',
      'James Cameron',
      'Christopher Nolan',
      'Martin Scorsese',
    ],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'What is the name of the princess in Disney\'s "Aladdin"?',
    options: ['Ariel', 'Belle', 'Jasmine', 'Cinderella'],
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
      'Which actor is famous for playing Captain Jack Sparrow in "Pirates of the Caribbean"?',
    options: [
      'Orlando Bloom',
      'Johnny Depp',
      'Keira Knightley',
      'Geoffrey Rush',
    ],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'What is the name of Simba\'s father in "The Lion King"?',
    options: ['Scar', 'Mufasa', 'Timon', 'Pumbaa'],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'What year was the first "Harry Potter" movie released?',
    options: ['1999', '2000', '2001', '2002'],
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
    question: 'Who voiced Woody in the "Toy Story" movies?',
    options: ['Tom Hanks', 'Tim Allen', 'Billy Crystal', 'Robin Williams'],
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
    question: 'What is the fictional setting of "Jurassic Park"?',
    options: ['Skull Island', 'Isla Nublar', 'Isla Sorna', 'Monster Island'],
    correctAnswer: 1,
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
      'In "The Matrix," does Neo take the red pill or the blue pill to learn the truth?',
    options: ['Red pill', 'Blue pill', 'Green pill', 'Yellow pill'],
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
    question: 'What is the highest-grossing movie of all time (as of 2023)?',
    options: [
      'Avengers: Endgame',
      'Avatar',
      'Titanic',
      'Star Wars: The Force Awakens',
    ],
    correctAnswer: 1,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },

  {
    question: 'What is the name of the computer in "2001: A Space Odyssey"?',
    options: ['HAL 5000', 'HAL 7000', 'HAL 9000', 'HAL 1000'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'In "Inception," what object does Cobb use as a totem?',
    options: ['A spinning top', 'A dice', 'A coin', 'A chess piece'],
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
    question:
      'Who played the character Andy Dufresne in "The Shawshank Redemption"?',
    options: ['Morgan Freeman', 'Jack Nicholson', 'Tim Robbins', 'Tom Hanks'],
    correctAnswer: 2,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question:
      'What is the name of the actress who stars in both "Kill Bill" and "Pulp Fiction"?',
    options: ['Uma Thurman', 'Mia Farrow', 'Angelina Jolie', 'Winona Ryder'],
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
    question: 'Who directed the movie "The Grand Budapest Hotel"?',
    options: [
      'Wes Anderson',
      'Quentin Tarantino',
      'Steven Spielberg',
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
    question: 'In "The Godfather," what is placed in a man’s bed as a warning?',
    options: [
      'A dead fish',
      "A horse's head",
      'A severed hand',
      'A blood-stained shirt',
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
    question:
      'In "Back to the Future," what speed must the DeLorean reach to time travel?',
    options: ['88 mph', '100 mph', '120 mph', '150 mph'],
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
    question:
      'What was the first animated movie to be nominated for Best Picture at the Oscars?',
    options: ['The Lion King', 'Beauty and the Beast', 'Toy Story', 'Shrek'],
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
    question: 'What is the name of the kingdom in "Frozen"?',
    options: ['Arendelle', 'Auris', 'Eldoria', 'Vandor'],
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
    question: 'Which actor played Edward Scissorhands?',
    options: ['Johnny Depp', 'Leonardo DiCaprio', 'Brad Pitt', 'Will Smith'],
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
    question: 'In "The Truman Show," what is Truman\'s job?',
    options: ['Photographer', 'Insurance salesman', 'Scientist', 'Doctor'],
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
    question: 'What is the name of the hotel in "The Shining"?',
    options: [
      'The Overlook Hotel',
      'The Hilton',
      'The Grand Hotel',
      'The Stanley Hotel',
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
    question:
      'Which movie won the Best Picture Oscar in 1994, beating "The Shawshank Redemption" and "Pulp Fiction"?',
    options: ['Forrest Gump', 'Titanic', 'Braveheart', 'The English Patient'],
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
    question: 'What is the name of the planet in "Avatar"?',
    options: ['Pandora', 'Zorath', 'Mars', 'Jupiter'],
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
    question: 'Who directed "Schindler\'s List"?',
    options: [
      'Martin Scorsese',
      'Steven Spielberg',
      'Quentin Tarantino',
      'Francis Ford Coppola',
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
    question: 'Which movie features the line, "You can\'t handle the truth!"?',
    options: ['A Few Good Men', 'The Godfather', 'Lethal Weapon', 'Die Hard'],
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
    question: 'Who plays the title character in the movie "Deadpool"?',
    options: [
      'Ryan Reynolds',
      'Chris Hemsworth',
      'Robert Downey Jr.',
      'Ben Affleck',
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
    question: 'What is the name of the pub in "Shaun of the Dead"?',
    options: ['The Winchester', 'The Crown', 'The Ship', 'The Red Lion'],
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
    question: 'Who composed the iconic score for "Star Wars"?',
    options: ['Hans Zimmer', 'John Williams', 'Danny Elfman', 'Alan Silvestri'],
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
    question: 'Which movie features the character Travis Bickle?',
    options: ['Taxi Driver', 'The Godfather', 'Goodfellas', 'Scarface'],
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
    question: 'In the movie "Memento," what is the protagonist’s name?',
    options: [
      'Leonard Shelby',
      'Max DeCosta',
      'Jack Torrance',
      'Travis Bickle',
    ],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Who played the character of V in "V for Vendetta"?',
    options: ['Hugh Jackman', 'Christian Bale', 'Ethan Hawke', 'Hugo Weaving'],
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
    question: 'In "The Matrix," what is the red pill supposed to represent?',
    options: [
      'Freedom and truth',
      'Escape from the system',
      'Power and control',
      'Safety and comfort',
    ],
    correctAnswer: 0,
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
      'What is the title of the final film in the "The Godfather" trilogy?',
    options: [
      'The Godfather Part II',
      'The Godfather: Coda',
      'The Godfather Returns',
      'The Godfather Part III',
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
    question: 'Who directed the 1988 film "Cinema Paradiso"?',
    options: [
      'Frances Ford Coppola',
      'Giuseppe Tornatore',
      'Federico Fellini',
      'Roberto Benigni',
    ],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'What was the first film directed by Quentin Tarantino?',
    options: ['Pulp Fiction', 'Reservoir Dogs', 'Jackie Brown', 'Kill Bill'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Who composed the score for the film "Blade Runner"?',
    options: ['Vangelis', 'John Williams', 'Hans Zimmer', 'Clint Mansell'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'What is the name of the fictional country in "Black Panther"?',
    options: ['Zamunda', 'Wakanda', 'Genovia', 'Bavaria'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'What 2010 film was inspired by the novel "Shutter Island"?',
    options: ['Inception', 'Shutter Island', 'The Sixth Sense', 'The Others'],
    correctAnswer: 1,
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
      'In "The Big Lebowski," what is the nickname of Jeff Bridges’ character?',
    options: ['The Dude', 'The Big Man', 'The Boss', 'The Dude-man'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Who directed the 1973 film "The Exorcist"?',
    options: [
      'William Friedkin',
      'George Romero',
      'John Carpenter',
      'Stanley Kubrick',
    ],
    correctAnswer: 0,
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
      'Which film featured the first appearance of the Marvel character Iron Man?',
    options: [
      'Avengers: Endgame',
      'Iron Man',
      'Captain America: Civil War',
      'The Incredible Hulk',
    ],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'Which film won the Academy Award for Best Picture in 1991?',
    options: [
      'The Silence of the Lambs',
      'Goodfellas',
      'Dances with Wolves',
      'The Godfather',
    ],
    correctAnswer: 0,
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
      'In "The Lord of the Rings," what is the name of Frodo’s best friend?',
    options: ['Aragorn', 'Legolas', 'Samwise', 'Gimli'],
    correctAnswer: 2,
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
      'What is the name of the fictional African nation in the 1988 film "Coming to America"?',
    options: ['Zamunda', 'Wakanda', 'Aldovia', 'Genovia'],
    correctAnswer: 0,
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
      'Which actor starred as the lead character in the movie "A Clockwork Orange"?',
    options: [
      'Malcolm McDowell',
      'Jack Nicholson',
      'Tommy Lee Jones',
      'Christopher Walken',
    ],
    correctAnswer: 0,
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
      'Which film did Steven Spielberg direct that was based on the book by Jaws author Peter Benchley?',
    options: ['Jurassic Park', 'Jaws', 'Saving Private Ryan', 'Indiana Jones'],
    correctAnswer: 1,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
  {
    question: 'In "Fight Club," what is the rule about discussing Fight Club?',
    options: [
      'Never talk about Fight Club',
      'Talk about Fight Club only at night',
      'Always talk about Fight Club',
      'No talking allowed in Fight Club',
    ],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Movies' },
        create: { name: 'Movies' },
      },
    },
  },
];

export const scienceQuestions: Prisma.QuestionCreateInput[] = [
  {
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Earth', 'Mercury', 'Mars'],
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
    question: 'What is the boiling point of water at sea level?',
    options: ['100°C', '90°C', '110°C', '150°C'],
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
    question: 'What is the main gas found in the air we breathe?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
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
    question: 'What is the tallest mountain on Earth?',
    options: [
      'Mount Everest',
      'Mount Kilimanjaro',
      'Mount Fuji',
      'Mount McKinley',
    ],
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
    question: 'What is the fastest land animal?',
    options: ['Lion', 'Cheetah', 'Tiger', 'Elephant'],
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
    question: 'What is the primary ingredient in glass?',
    options: ['Sand', 'Water', 'Wood', 'Iron'],
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
    question: 'What is the largest ocean on Earth?',
    options: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Southern Ocean',
      'Pacific Ocean',
    ],
    correctAnswer: 3,
    difficulty: 'EASY',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the process by which plants make their food?',
    options: ['Respiration', 'Transpiration', 'Photosynthesis', 'Digestion'],
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
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
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
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'O2', 'CO2', 'HO2'],
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
    question: 'What is the longest river in the world?',
    options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'],
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
    question: 'Which gas is used in balloons to make them float?',
    options: ['Hydrogen', 'Oxygen', 'Helium', 'Nitrogen'],
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
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Earth', 'Mars', 'Jupiter'],
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
    question: 'What is the name of the closest star to Earth after the Sun?',
    options: ['Proxima Centauri', 'Alpha Centauri', 'Betelgeuse', 'Sirius'],
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
    question: 'What is the only metal that is liquid at room temperature?',
    options: ['Mercury', 'Iron', 'Gold', 'Copper'],
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
    question: 'What is the largest planet in the solar system?',
    options: ['Jupiter', 'Saturn', 'Earth', 'Neptune'],
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
    question: "What is the main component of the Earth's atmosphere?",
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
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
    question: 'What is the chemical symbol for the element gold?',
    options: ['Au', 'Ag', 'Pb', 'Fe'],
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
    question: 'Which planet has the most moons in our solar system?',
    options: ['Saturn', 'Jupiter', 'Mars', 'Neptune'],
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
    question: 'What is the process by which a solid turns into a gas?',
    options: ['Sublimation', 'Evaporation', 'Condensation', 'Fusion'],
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
    question: "What is the most common element in the Earth's crust?",
    options: ['Oxygen', 'Silicon', 'Aluminum', 'Iron'],
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
    question: 'Which part of the plant is responsible for photosynthesis?',
    options: ['Roots', 'Stem', 'Leaves', 'Flowers'],
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
    question: 'What is the atomic number of carbon?',
    options: ['6', '8', '12', '14'],
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
    question:
      'Which scientist is known for developing the theory of relativity?',
    options: [
      'Isaac Newton',
      'Galileo Galilei',
      'Albert Einstein',
      'Nikola Tesla',
    ],
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
      'What is the name of the process that plants use to absorb water from the soil?',
    options: ['Transpiration', 'Osmosis', 'Capillarity', 'Photosynthesis'],
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
    question: 'Which gas do plants take in during photosynthesis?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
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
    question: 'What is the chemical formula of methane?',
    options: ['CH4', 'CO2', 'H2O', 'C2H6'],
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
    question: 'How many bones are in the adult human body?',
    options: ['206', '250', '256', '192'],
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
    question:
      'Which of the following is a type of rock formed by cooling lava?',
    options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Fossilized'],
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
    question: 'What is the most common type of star in the Milky Way galaxy?',
    options: ['Red Giant', 'Blue Giant', 'White Dwarf', 'Red Dwarf'],
    correctAnswer: 3,
    difficulty: 'MEDIUM',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the smallest unit of an element?',
    options: ['Atom', 'Molecule', 'Electron', 'Neutron'],
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
    question: 'What is the name of the galaxy that contains the Earth?',
    options: ['Andromeda', 'Milky Way', 'Triangulum', 'Sombrero'],
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
    question: 'Which of the following elements is a noble gas?',
    options: ['Oxygen', 'Neon', 'Nitrogen', 'Helium'],
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
    question: 'What is the most abundant element in the universe?',
    options: ['Oxygen', 'Hydrogen', 'Helium', 'Carbon'],
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
    question: 'What is the primary source of energy for the Earth?',
    options: ['Wind', 'Nuclear power', 'Solar radiation', 'Geothermal energy'],
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
    question: 'Which of the following is a noble gas?',
    options: ['Helium', 'Carbon', 'Oxygen', 'Nitrogen'],
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
    question:
      'Which process in plants is responsible for the release of water vapor?',
    options: ['Evaporation', 'Photosynthesis', 'Transpiration', 'Osmosis'],
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
    question: 'What is the chemical symbol for sodium?',
    options: ['Na', 'S', 'N', 'Ne'],
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
    question: 'Which body part is responsible for the pumping of blood?',
    options: ['Brain', 'Heart', 'Lungs', 'Kidneys'],
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
    question: 'Which animal has the longest lifespan?',
    options: ['Elephant', 'Tortoise', 'Whale', 'Shark'],
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
    question: 'What is the heaviest naturally occurring element?',
    options: ['Uranium', 'Plutonium', 'Osmium', 'Neptunium'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'Which planet has the shortest day in our solar system?',
    options: ['Venus', 'Earth', 'Jupiter', 'Mars'],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'Which element has the highest melting point?',
    options: ['Carbon', 'Tungsten', 'Iron', 'Titanium'],
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
    question: 'What is the most common isotope of hydrogen?',
    options: ['Protium', 'Deuterium', 'Tritium', 'Helium'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the name of the first synthetic element?',
    options: ['Plutonium', 'Technetium', 'Radium', 'Curium'],
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
    question:
      'What is the chemical symbol for the element with the atomic number 92?',
    options: ['U', 'Np', 'Pu', 'Am'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question:
      'Which of the following elements is found in all organic compounds?',
    options: ['Nitrogen', 'Carbon', 'Oxygen', 'Hydrogen'],
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
    question: 'What is the theory that explains the origin of the universe?',
    options: [
      'The Big Bang Theory',
      'String Theory',
      'Quantum Theory',
      'Evolutionary Theory',
    ],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: "What is the second most abundant gas in Earth's atmosphere?",
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'Which subatomic particle has a negative charge?',
    options: ['Proton', 'Neutron', 'Electron', 'Positron'],
    correctAnswer: 2,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'Which planet has the largest volcano in the solar system?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
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
    question: "Which phenomenon causes the Earth's magnetic field?",
    options: [
      'Solar wind',
      'Earth’s molten iron core',
      'Tectonic activity',
      'Ozone layer',
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
    question: 'What is the main cause of ocean acidification?',
    options: [
      'Increased carbon dioxide in the atmosphere',
      'Overfishing',
      'Pollution from oil spills',
      'Increased temperatures',
    ],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: "What is the most abundant metal in the Earth's crust?",
    options: ['Iron', 'Aluminum', 'Magnesium', 'Calcium'],
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
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Ga', 'Ge'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What is the most dense planet in the solar system?',
    options: ['Earth', 'Saturn', 'Jupiter', 'Mercury'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question:
      'Which process is responsible for the formation of sedimentary rocks?',
    options: ['Melting', 'Cooling', 'Erosion', 'Compaction'],
    correctAnswer: 3,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
  {
    question: 'What type of bond involves the sharing of electron pairs?',
    options: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Hydrogen bond'],
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
    question: 'Which law states that energy cannot be created or destroyed?',
    options: [
      'Law of Conservation of Mass',
      'First Law of Thermodynamics',
      "Newton's Third Law",
      'Law of Universal Gravitation',
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
    question: 'What is the most distant planet in our solar system?',
    options: ['Neptune', 'Uranus', 'Saturn', 'Pluto'],
    correctAnswer: 0,
    difficulty: 'HARD',
    category: {
      connectOrCreate: {
        where: { name: 'Science' },
        create: { name: 'Science' },
      },
    },
  },
];
