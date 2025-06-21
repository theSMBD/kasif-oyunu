import { Country } from '../types';

export const countries: Country[] = [
  {
    id: 'france',
    name: 'France',
    nativeName: 'France',
    capital: 'Paris',
    continent: 'Europe',
    population: 67390000,
    area: 551695,
    flag: '🇫🇷',
    coordinates: { latitude: 46.2276, longitude: 2.2137 },
    languages: [
      {
        code: 'fr',
        name: 'French',
        nativeName: 'Français',
        phrases: [
          {
            id: 'fr_hello',
            category: 'greetings',
            english: 'Hello',
            native: 'Bonjour',
            pronunciation: 'bohn-ZHOOR',
            audioUrl: 'audio/fr_hello.mp3',
          },
          {
            id: 'fr_thank_you',
            category: 'greetings',
            english: 'Thank you',
            native: 'Merci',
            pronunciation: 'mehr-SEE',
            audioUrl: 'audio/fr_thank_you.mp3',
          },
          {
            id: 'fr_goodbye',
            category: 'greetings',
            english: 'Goodbye',
            native: 'Au revoir',
            pronunciation: 'oh ruh-VWAHR',
            audioUrl: 'audio/fr_goodbye.mp3',
          },
        ],
      },
    ],
    currencies: [
      {
        code: 'EUR',
        name: 'Euro',
        symbol: '€',
        exchangeRate: 1.0,
      },
    ],
    landmarks: [
      {
        id: 'eiffel_tower',
        name: 'Eiffel Tower',
        description: 'Iconic iron lattice tower on the Champ de Mars in Paris',
        imageUrl: 'images/landmarks/eiffel_tower.jpg',
        coordinates: { latitude: 48.8584, longitude: 2.2945 },
        arModelUrl: 'models/eiffel_tower.glb',
        facts: [
          'Built in 1889 for the World\'s Fair',
          '324 meters tall',
          'Named after engineer Gustave Eiffel',
          'Over 7 million visitors annually',
        ],
        category: 'monument',
      },
      {
        id: 'louvre_museum',
        name: 'Louvre Museum',
        description: 'World\'s largest art museum and historic monument',
        imageUrl: 'images/landmarks/louvre_museum.jpg',
        coordinates: { latitude: 48.8606, longitude: 2.3376 },
        arModelUrl: 'models/louvre_museum.glb',
        facts: [
          'Home to the Mona Lisa',
          'Former royal palace',
          'Over 35,000 works of art',
          'Glass pyramid entrance designed by I.M. Pei',
        ],
        category: 'museum',
      },
    ],
    culture: {
      traditions: [
        {
          id: 'french_cuisine',
          name: 'French Cuisine',
          description: 'Renowned for its sophistication and variety',
          imageUrl: 'images/culture/french_cuisine.jpg',
          category: 'food',
        },
        {
          id: 'fashion',
          name: 'Paris Fashion',
          description: 'Global center of fashion and style',
          imageUrl: 'images/culture/paris_fashion.jpg',
          category: 'fashion',
        },
      ],
      festivals: [
        {
          id: 'bastille_day',
          name: 'Bastille Day',
          description: 'French National Day celebrating the French Revolution',
          date: 'July 14',
          imageUrl: 'images/festivals/bastille_day.jpg',
          activities: ['Military parade', 'Fireworks', 'Dancing in the streets'],
        },
      ],
      cuisine: [
        {
          id: 'croissant',
          name: 'Croissant',
          description: 'Buttery, flaky pastry in a crescent shape',
          imageUrl: 'images/cuisine/croissant.jpg',
          ingredients: ['Flour', 'Butter', 'Yeast', 'Sugar', 'Salt'],
          recipe: 'Traditional French croissant recipe...',
        },
      ],
      customs: [
        {
          id: 'kissing_greeting',
          name: 'La Bise',
          description: 'Cheek kissing greeting between friends and family',
          category: 'greetings',
        },
      ],
      music: [
        {
          id: 'chanson',
          name: 'La Vie en Rose',
          artist: 'Édith Piaf',
          audioUrl: 'audio/music/la_vie_en_rose.mp3',
          description: 'Iconic French chanson about love and life',
        },
      ],
      art: [
        {
          id: 'mona_lisa',
          name: 'Mona Lisa',
          artist: 'Leonardo da Vinci',
          imageUrl: 'images/art/mona_lisa.jpg',
          description: 'Famous portrait painting',
          period: 'Renaissance',
        },
      ],
    },
    facts: [
      {
        id: 'france_fact_1',
        category: 'geography',
        fact: 'France is the largest country in the European Union by land area',
      },
      {
        id: 'france_fact_2',
        category: 'history',
        fact: 'The French Revolution began in 1789 and lasted for 10 years',
      },
      {
        id: 'france_fact_3',
        category: 'culture',
        fact: 'France has won the most Nobel Prizes in Literature',
      },
    ],
    missions: [
      {
        id: 'explore_paris',
        title: 'Explore Paris',
        description: 'Visit the main landmarks of Paris',
        type: 'explore_landmark',
        countryId: 'france',
        difficulty: 'easy',
        requirements: [
          {
            type: 'visit_landmarks',
            value: 2,
            description: 'Visit 2 landmarks in Paris',
          },
        ],
        rewards: [
          {
            type: 'coins',
            value: 50,
            description: 'Earn 50 coins',
          },
          {
            type: 'experience',
            value: 100,
            description: 'Earn 100 experience points',
          },
        ],
        isCompleted: false,
        progress: 0,
        maxProgress: 2,
      },
    ],
    difficulty: 'easy',
    isUnlocked: true,
  },
  {
    id: 'japan',
    name: 'Japan',
    nativeName: '日本',
    capital: 'Tokyo',
    continent: 'Asia',
    population: 125800000,
    area: 377975,
    flag: '🇯🇵',
    coordinates: { latitude: 36.2048, longitude: 138.2529 },
    languages: [
      {
        code: 'ja',
        name: 'Japanese',
        nativeName: '日本語',
        phrases: [
          {
            id: 'ja_hello',
            category: 'greetings',
            english: 'Hello',
            native: 'こんにちは',
            pronunciation: 'kon-nee-chee-wah',
            audioUrl: 'audio/ja_hello.mp3',
          },
          {
            id: 'ja_thank_you',
            category: 'greetings',
            english: 'Thank you',
            native: 'ありがとう',
            pronunciation: 'ah-ree-gah-toh',
            audioUrl: 'audio/ja_thank_you.mp3',
          },
        ],
      },
    ],
    currencies: [
      {
        code: 'JPY',
        name: 'Japanese Yen',
        symbol: '¥',
        exchangeRate: 0.007,
      },
    ],
    landmarks: [
      {
        id: 'mount_fuji',
        name: 'Mount Fuji',
        description: 'Japan\'s highest mountain and sacred symbol',
        imageUrl: 'images/landmarks/mount_fuji.jpg',
        coordinates: { latitude: 35.3606, longitude: 138.7274 },
        arModelUrl: 'models/mount_fuji.glb',
        facts: [
          '3,776 meters tall',
          'Active volcano',
          'Sacred mountain in Shinto religion',
          'UNESCO World Heritage Site',
        ],
        category: 'natural',
      },
    ],
    culture: {
      traditions: [
        {
          id: 'tea_ceremony',
          name: 'Japanese Tea Ceremony',
          description: 'Traditional ritual of preparing and serving matcha tea',
          imageUrl: 'images/culture/tea_ceremony.jpg',
          category: 'ceremony',
        },
      ],
      festivals: [],
      cuisine: [],
      customs: [],
      music: [],
      art: [],
    },
    facts: [],
    missions: [],
    difficulty: 'medium',
    isUnlocked: false,
  },
  {
    id: 'brazil',
    name: 'Brazil',
    nativeName: 'Brasil',
    capital: 'Brasília',
    continent: 'South America',
    population: 212600000,
    area: 8515767,
    flag: '🇧🇷',
    coordinates: { latitude: -14.235, longitude: -51.9253 },
    languages: [
      {
        code: 'pt',
        name: 'Portuguese',
        nativeName: 'Português',
        phrases: [
          {
            id: 'pt_hello',
            category: 'greetings',
            english: 'Hello',
            native: 'Olá',
            pronunciation: 'oh-LAH',
            audioUrl: 'audio/pt_hello.mp3',
          },
        ],
      },
    ],
    currencies: [
      {
        code: 'BRL',
        name: 'Brazilian Real',
        symbol: 'R$',
        exchangeRate: 0.19,
      },
    ],
    landmarks: [
      {
        id: 'christ_redeemer',
        name: 'Christ the Redeemer',
        description: 'Famous statue of Jesus Christ in Rio de Janeiro',
        imageUrl: 'images/landmarks/christ_redeemer.jpg',
        coordinates: { latitude: -22.9519, longitude: -43.2105 },
        arModelUrl: 'models/christ_redeemer.glb',
        facts: [
          '30 meters tall',
          'Built between 1922 and 1931',
          'One of the New Seven Wonders of the World',
          'Made of reinforced concrete and soapstone',
        ],
        category: 'monument',
      },
    ],
    culture: {
      traditions: [],
      festivals: [],
      cuisine: [],
      customs: [],
      music: [],
      art: [],
    },
    facts: [],
    missions: [],
    difficulty: 'medium',
    isUnlocked: false,
  },
];

export const getCountryById = (id: string): Country | undefined => {
  return countries.find(country => country.id === id);
};

export const getCountriesByContinent = (continent: string): Country[] => {
  return countries.filter(country => country.continent === continent);
};

export const getUnlockedCountries = (unlockedIds: string[]): Country[] => {
  return countries.filter(country => unlockedIds.includes(country.id));
}; 