import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

// Context Providers
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { ProgressProvider } from './context/ProgressContext';
import { AudioProvider } from './context/AudioContext';

// Navigation
import RootNavigator from './navigation/RootNavigator';

// Theme
import { theme } from './utils/theme';

// Ignore specific warnings for development
LogBox.ignoreLogs([
  'Require cycle:',
  'ViewPropTypes will be removed',
  'AsyncStorage has been extracted',
]);

const App: React.FC = () => {
  React.useEffect(() => {
    // Hide splash screen after app is ready
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider>
          <UserProvider>
            <ProgressProvider>
              <AudioProvider>
                <NavigationContainer>
                  <StatusBar
                    barStyle="light-content"
                    backgroundColor={theme.colors.primary}
                    translucent
                  />
                  <RootNavigator />
                </NavigationContainer>
              </AudioProvider>
            </ProgressProvider>
          </UserProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App; 