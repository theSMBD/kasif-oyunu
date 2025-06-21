import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Progress, CountryProgress, LanguageProgress, AchievementProgress } from '../types';

interface ProgressContextType {
  progress: Progress | null;
  isLoading: boolean;
  initializeProgress: (userId: string) => Promise<void>;
  updateCountryProgress: (countryId: string, updates: Partial<CountryProgress>) => Promise<void>;
  updateLanguageProgress: (languageCode: string, updates: Partial<LanguageProgress>) => Promise<void>;
  updateAchievementProgress: (achievementId: string, progress: number) => Promise<void>;
  addExperience: (amount: number) => Promise<void>;
  addCoins: (amount: number) => Promise<void>;
  addGems: (amount: number) => Promise<void>;
  getCountryProgress: (countryId: string) => CountryProgress | null;
  getLanguageProgress: (languageCode: string) => LanguageProgress | null;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

interface ProgressProviderProps {
  children: React.ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<Progress | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const progressData = await AsyncStorage.getItem('progress_data');
      if (progressData) {
        const parsedProgress = JSON.parse(progressData);
        setProgress(parsedProgress);
      }
    } catch (error) {
      console.error('Error loading progress data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveProgress = async (progressData: Progress) => {
    try {
      await AsyncStorage.setItem('progress_data', JSON.stringify(progressData));
    } catch (error) {
      console.error('Error saving progress data:', error);
    }
  };

  const initializeProgress = async (userId: string) => {
    const newProgress: Progress = {
      userId,
      countries: [],
      languages: [],
      achievements: [],
      totalExperience: 0,
      totalCoins: 0,
      totalGems: 0,
    };

    setProgress(newProgress);
    await saveProgress(newProgress);
  };

  const updateCountryProgress = async (countryId: string, updates: Partial<CountryProgress>) => {
    if (!progress) return;

    const existingIndex = progress.countries.findIndex(cp => cp.countryId === countryId);
    let updatedCountries = [...progress.countries];

    if (existingIndex >= 0) {
      updatedCountries[existingIndex] = { ...updatedCountries[existingIndex], ...updates };
    } else {
      const newCountryProgress: CountryProgress = {
        countryId,
        isUnlocked: false,
        completedMissions: [],
        landmarksVisited: [],
        quizScores: {},
        lastVisited: new Date(),
        ...updates,
      };
      updatedCountries.push(newCountryProgress);
    }

    const updatedProgress = { ...progress, countries: updatedCountries };
    setProgress(updatedProgress);
    await saveProgress(updatedProgress);
  };

  const updateLanguageProgress = async (languageCode: string, updates: Partial<LanguageProgress>) => {
    if (!progress) return;

    const existingIndex = progress.languages.findIndex(lp => lp.languageCode === languageCode);
    let updatedLanguages = [...progress.languages];

    if (existingIndex >= 0) {
      updatedLanguages[existingIndex] = { ...updatedLanguages[existingIndex], ...updates };
    } else {
      const newLanguageProgress: LanguageProgress = {
        languageCode,
        phrasesLearned: [],
        proficiency: 0,
        lastPracticed: new Date(),
        ...updates,
      };
      updatedLanguages.push(newLanguageProgress);
    }

    const updatedProgress = { ...progress, languages: updatedLanguages };
    setProgress(updatedProgress);
    await saveProgress(updatedProgress);
  };

  const updateAchievementProgress = async (achievementId: string, newProgress: number) => {
    if (!progress) return;

    const existingIndex = progress.achievements.findIndex(ap => ap.achievementId === achievementId);
    let updatedAchievements = [...progress.achievements];

    if (existingIndex >= 0) {
      updatedAchievements[existingIndex] = { 
        ...updatedAchievements[existingIndex], 
        progress: newProgress,
        isUnlocked: newProgress >= 100,
        unlockedAt: newProgress >= 100 ? new Date() : undefined,
      };
    } else {
      const newAchievementProgress: AchievementProgress = {
        achievementId,
        progress: newProgress,
        isUnlocked: newProgress >= 100,
        unlockedAt: newProgress >= 100 ? new Date() : undefined,
      };
      updatedAchievements.push(newAchievementProgress);
    }

    const updatedProgress = { ...progress, achievements: updatedAchievements };
    setProgress(updatedProgress);
    await saveProgress(updatedProgress);
  };

  const addExperience = async (amount: number) => {
    if (!progress) return;

    const updatedProgress = {
      ...progress,
      totalExperience: progress.totalExperience + amount,
    };

    setProgress(updatedProgress);
    await saveProgress(updatedProgress);
  };

  const addCoins = async (amount: number) => {
    if (!progress) return;

    const updatedProgress = {
      ...progress,
      totalCoins: progress.totalCoins + amount,
    };

    setProgress(updatedProgress);
    await saveProgress(updatedProgress);
  };

  const addGems = async (amount: number) => {
    if (!progress) return;

    const updatedProgress = {
      ...progress,
      totalGems: progress.totalGems + amount,
    };

    setProgress(updatedProgress);
    await saveProgress(updatedProgress);
  };

  const getCountryProgress = (countryId: string): CountryProgress | null => {
    if (!progress) return null;
    return progress.countries.find(cp => cp.countryId === countryId) || null;
  };

  const getLanguageProgress = (languageCode: string): LanguageProgress | null => {
    if (!progress) return null;
    return progress.languages.find(lp => lp.languageCode === languageCode) || null;
  };

  const value: ProgressContextType = {
    progress,
    isLoading,
    initializeProgress,
    updateCountryProgress,
    updateLanguageProgress,
    updateAchievementProgress,
    addExperience,
    addCoins,
    addGems,
    getCountryProgress,
    getLanguageProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}; 