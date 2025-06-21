import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AudioTrack } from '../types';

interface AudioContextType {
  isSoundEnabled: boolean;
  isMusicEnabled: boolean;
  currentMusic: AudioTrack | null;
  volume: number;
  toggleSound: () => void;
  toggleMusic: () => void;
  setVolume: (volume: number) => void;
  playSound: (soundId: string) => void;
  playMusic: (musicId: string) => void;
  stopMusic: () => void;
  pauseMusic: () => void;
  resumeMusic: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

interface AudioProviderProps {
  children: React.ReactNode;
}

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isMusicEnabled, setIsMusicEnabled] = useState(true);
  const [currentMusic, setCurrentMusic] = useState<AudioTrack | null>(null);
  const [volume, setVolumeState] = useState(0.7);

  useEffect(() => {
    loadAudioSettings();
  }, []);

  const loadAudioSettings = async () => {
    try {
      const soundEnabled = await AsyncStorage.getItem('sound_enabled');
      const musicEnabled = await AsyncStorage.getItem('music_enabled');
      const savedVolume = await AsyncStorage.getItem('audio_volume');

      if (soundEnabled !== null) {
        setIsSoundEnabled(JSON.parse(soundEnabled));
      }
      if (musicEnabled !== null) {
        setIsMusicEnabled(JSON.parse(musicEnabled));
      }
      if (savedVolume !== null) {
        setVolumeState(JSON.parse(savedVolume));
      }
    } catch (error) {
      console.error('Error loading audio settings:', error);
    }
  };

  const saveAudioSettings = async () => {
    try {
      await AsyncStorage.setItem('sound_enabled', JSON.stringify(isSoundEnabled));
      await AsyncStorage.setItem('music_enabled', JSON.stringify(isMusicEnabled));
      await AsyncStorage.setItem('audio_volume', JSON.stringify(volume));
    } catch (error) {
      console.error('Error saving audio settings:', error);
    }
  };

  const toggleSound = () => {
    setIsSoundEnabled(!isSoundEnabled);
  };

  const toggleMusic = () => {
    setIsMusicEnabled(!isMusicEnabled);
    if (!isMusicEnabled && currentMusic) {
      // Resume music if it was paused
      resumeMusic();
    } else if (isMusicEnabled && currentMusic) {
      // Pause music if it was playing
      pauseMusic();
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(Math.max(0, Math.min(1, newVolume)));
  };

  const playSound = (soundId: string) => {
    if (!isSoundEnabled) return;

    // Implementation for playing sound effects
    // This would integrate with react-native-sound or similar library
    console.log(`Playing sound: ${soundId}`);
  };

  const playMusic = (musicId: string) => {
    if (!isMusicEnabled) return;

    // Implementation for playing background music
    // This would integrate with react-native-sound or similar library
    const musicTrack: AudioTrack = {
      id: musicId,
      name: `Music ${musicId}`,
      url: `music/${musicId}.mp3`,
      category: 'music',
      volume,
      loop: true,
    };

    setCurrentMusic(musicTrack);
    console.log(`Playing music: ${musicId}`);
  };

  const stopMusic = () => {
    // Implementation for stopping music
    setCurrentMusic(null);
    console.log('Stopping music');
  };

  const pauseMusic = () => {
    // Implementation for pausing music
    console.log('Pausing music');
  };

  const resumeMusic = () => {
    // Implementation for resuming music
    console.log('Resuming music');
  };

  useEffect(() => {
    saveAudioSettings();
  }, [isSoundEnabled, isMusicEnabled, volume]);

  const value: AudioContextType = {
    isSoundEnabled,
    isMusicEnabled,
    currentMusic,
    volume,
    toggleSound,
    toggleMusic,
    setVolume,
    playSound,
    playMusic,
    stopMusic,
    pauseMusic,
    resumeMusic,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}; 