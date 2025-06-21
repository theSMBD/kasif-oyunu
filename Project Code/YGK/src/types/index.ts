// User Types
export interface User {
  id: string;
  name: string;
  avatar: Avatar;
  level: number;
  experience: number;
  coins: number;
  gems: number;
  unlockedCountries: string[];
  completedMissions: string[];
  achievements: Achievement[];
  preferences: UserPreferences;
  createdAt: Date;
  lastActive: Date;
}

export interface Avatar {
  id: string;
  name: string;
  imageUrl: string;
  accessories: string[];
  colors: AvatarColors;
}

export interface AvatarColors {
  skin: string;
  hair: string;
  eyes: string;
  outfit: string;
}

export interface UserPreferences {
  language: string;
  soundEnabled: boolean;
  musicEnabled: boolean;
  notificationsEnabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  theme: 'light' | 'dark' | 'auto';
}

// Country Types
export interface Country {
  id: string;
  name: string;
  nativeName: string;
  capital: string;
  continent: string;
  population: number;
  area: number;
  flag: string;
  coordinates: Coordinates;
  languages: Language[];
  currencies: Currency[];
  landmarks: Landmark[];
  culture: Culture;
  facts: CountryFact[];
  missions: Mission[];
  difficulty: 'easy' | 'medium' | 'hard';
  isUnlocked: boolean;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  phrases: Phrase[];
}

export interface Phrase {
  id: string;
  category: string;
  english: string;
  native: string;
  pronunciation: string;
  audioUrl?: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
  exchangeRate: number;
}

export interface Landmark {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  coordinates: Coordinates;
  arModelUrl?: string;
  facts: string[];
  category: 'monument' | 'natural' | 'building' | 'museum';
}

export interface Culture {
  traditions: Tradition[];
  festivals: Festival[];
  cuisine: CuisineItem[];
  customs: Custom[];
  music: MusicItem[];
  art: ArtItem[];
}

export interface Tradition {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Festival {
  id: string;
  name: string;
  description: string;
  date: string;
  imageUrl: string;
  activities: string[];
}

export interface CuisineItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  ingredients: string[];
  recipe?: string;
}

export interface Custom {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface MusicItem {
  id: string;
  name: string;
  artist: string;
  audioUrl: string;
  description: string;
}

export interface ArtItem {
  id: string;
  name: string;
  artist: string;
  imageUrl: string;
  description: string;
  period: string;
}

export interface CountryFact {
  id: string;
  category: string;
  fact: string;
  imageUrl?: string;
}

// Mission Types
export interface Mission {
  id: string;
  title: string;
  description: string;
  type: MissionType;
  countryId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  requirements: MissionRequirement[];
  rewards: Reward[];
  isCompleted: boolean;
  progress: number;
  maxProgress: number;
}

export type MissionType = 
  | 'explore_landmark'
  | 'learn_phrases'
  | 'complete_quiz'
  | 'find_object'
  | 'cultural_activity'
  | 'geography_challenge'
  | 'ar_experience';

export interface MissionRequirement {
  type: string;
  value: any;
  description: string;
}

export interface Reward {
  type: 'coins' | 'gems' | 'experience' | 'badge' | 'unlock';
  value: number | string;
  description: string;
}

// Achievement Types
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: AchievementCategory;
  isUnlocked: boolean;
  unlockedAt?: Date;
  progress: number;
  maxProgress: number;
}

export type AchievementCategory = 
  | 'explorer'
  | 'linguist'
  | 'cultural_expert'
  | 'geography_master'
  | 'collector';

// AR Types
export interface ARExperience {
  id: string;
  title: string;
  description: string;
  countryId: string;
  landmarkId: string;
  modelUrl: string;
  instructions: string[];
  interactions: ARInteraction[];
}

export interface ARInteraction {
  id: string;
  type: 'tap' | 'swipe' | 'rotate' | 'scale';
  target: string;
  feedback: string;
}

// Quiz Types
export interface Quiz {
  id: string;
  title: string;
  description: string;
  countryId: string;
  questions: QuizQuestion[];
  timeLimit?: number;
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple_choice' | 'true_false' | 'matching' | 'fill_blank';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  points: number;
}

// Navigation Types
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Main: undefined;
  Auth: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Missions: undefined;
  Profile: undefined;
};

export type ExploreStackParamList = {
  WorldMap: undefined;
  CountryDetail: { countryId: string };
  LandmarkDetail: { landmarkId: string };
  ARExperience: { experienceId: string };
  Quiz: { quizId: string };
};

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  typography: {
    h1: {
      fontSize: number;
      fontWeight: string;
    };
    h2: {
      fontSize: number;
      fontWeight: string;
    };
    h3: {
      fontSize: number;
      fontWeight: string;
    };
    body: {
      fontSize: number;
      fontWeight: string;
    };
    caption: {
      fontSize: number;
      fontWeight: string;
    };
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

// Audio Types
export interface AudioTrack {
  id: string;
  name: string;
  url: string;
  category: 'music' | 'sound' | 'voice';
  volume: number;
  loop: boolean;
}

// Progress Types
export interface Progress {
  userId: string;
  countries: CountryProgress[];
  languages: LanguageProgress[];
  achievements: AchievementProgress[];
  totalExperience: number;
  totalCoins: number;
  totalGems: number;
}

export interface CountryProgress {
  countryId: string;
  isUnlocked: boolean;
  completedMissions: string[];
  landmarksVisited: string[];
  quizScores: { [quizId: string]: number };
  lastVisited: Date;
}

export interface LanguageProgress {
  languageCode: string;
  phrasesLearned: string[];
  proficiency: number;
  lastPracticed: Date;
}

export interface AchievementProgress {
  achievementId: string;
  progress: number;
  isUnlocked: boolean;
  unlockedAt?: Date;
} 