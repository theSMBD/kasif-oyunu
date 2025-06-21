import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import WorldMapScreen from '../screens/WorldMapScreen';
import CountryDetailScreen from '../screens/CountryDetailScreen';
import LandmarkDetailScreen from '../screens/LandmarkDetailScreen';
import ARExperienceScreen from '../screens/ARExperienceScreen';
import QuizScreen from '../screens/QuizScreen';

// Types
import { ExploreStackParamList } from '../types';
import { theme } from '../utils/theme';

const Stack = createStackNavigator<ExploreStackParamList>();

const ExploreNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.surface,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen 
        name="WorldMap" 
        component={WorldMapScreen}
        options={{ title: 'World Explorer' }}
      />
      <Stack.Screen 
        name="CountryDetail" 
        component={CountryDetailScreen}
        options={{ title: 'Country' }}
      />
      <Stack.Screen 
        name="LandmarkDetail" 
        component={LandmarkDetailScreen}
        options={{ title: 'Landmark' }}
      />
      <Stack.Screen 
        name="ARExperience" 
        component={ARExperienceScreen}
        options={{ title: 'AR Experience' }}
      />
      <Stack.Screen 
        name="Quiz" 
        component={QuizScreen}
        options={{ title: 'Quiz' }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator; 