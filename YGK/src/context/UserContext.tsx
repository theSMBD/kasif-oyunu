import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, Avatar, UserPreferences } from '../types';

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: (name: string, avatar: Avatar) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (updates: Partial<User>) => Promise<void>;
  updateAvatar: (avatar: Avatar) => Promise<void>;
  updatePreferences: (preferences: Partial<UserPreferences>) => Promise<void>;
  addExperience: (amount: number) => Promise<void>;
  addCoins: (amount: number) => Promise<void>;
  addGems: (amount: number) => Promise<void>;
  unlockCountry: (countryId: string) => Promise<void>;
  completeMission: (missionId: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const userData = await AsyncStorage.getItem('user_data');
      if (userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveUser = async (userData: User) => {
    try {
      await AsyncStorage.setItem('user_data', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  const login = async (name: string, avatar: Avatar) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      avatar,
      level: 1,
      experience: 0,
      coins: 100,
      gems: 10,
      unlockedCountries: ['france'], // Start with France unlocked
      completedMissions: [],
      achievements: [],
      preferences: {
        language: 'en',
        soundEnabled: true,
        musicEnabled: true,
        notificationsEnabled: true,
        difficulty: 'easy',
        theme: 'auto',
      },
      createdAt: new Date(),
      lastActive: new Date(),
    };

    setUser(newUser);
    await saveUser(newUser);
  };

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem('user_data');
  };

  const updateUser = async (updates: Partial<User>) => {
    if (!user) return;

    const updatedUser = { ...user, ...updates, lastActive: new Date() };
    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const updateAvatar = async (avatar: Avatar) => {
    if (!user) return;

    const updatedUser = { ...user, avatar, lastActive: new Date() };
    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const updatePreferences = async (preferences: Partial<UserPreferences>) => {
    if (!user) return;

    const updatedPreferences = { ...user.preferences, ...preferences };
    const updatedUser = { ...user, preferences: updatedPreferences, lastActive: new Date() };
    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const addExperience = async (amount: number) => {
    if (!user) return;

    const newExperience = user.experience + amount;
    const newLevel = Math.floor(newExperience / 100) + 1;
    
    const updatedUser = {
      ...user,
      experience: newExperience,
      level: newLevel,
      lastActive: new Date(),
    };

    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const addCoins = async (amount: number) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      coins: user.coins + amount,
      lastActive: new Date(),
    };

    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const addGems = async (amount: number) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      gems: user.gems + amount,
      lastActive: new Date(),
    };

    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const unlockCountry = async (countryId: string) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      unlockedCountries: [...user.unlockedCountries, countryId],
      lastActive: new Date(),
    };

    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const completeMission = async (missionId: string) => {
    if (!user) return;

    const updatedUser = {
      ...user,
      completedMissions: [...user.completedMissions, missionId],
      lastActive: new Date(),
    };

    setUser(updatedUser);
    await saveUser(updatedUser);
  };

  const value: UserContextType = {
    user,
    isLoading,
    login,
    logout,
    updateUser,
    updateAvatar,
    updatePreferences,
    addExperience,
    addCoins,
    addGems,
    unlockCountry,
    completeMission,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}; 