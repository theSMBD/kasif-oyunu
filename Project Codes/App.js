import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);

  const countries = [
    { name: 'France', capital: 'Paris', flag: '🇫🇷' },
    { name: 'Japan', capital: 'Tokyo', flag: '🇯🇵' },
    { name: 'Brazil', capital: 'Brasília', flag: '🇧🇷' },
    { name: 'Italy', capital: 'Rome', flag: '🇮🇹' },
    { name: 'Australia', capital: 'Canberra', flag: '🇦🇺' },
  ];

  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);

  const checkAnswer = (selectedCapital) => {
    const currentCountry = countries[currentCountryIndex];
    
    if (selectedCapital === currentCountry.capital) {
      setScore(score + 10);
      setLevel(level + 1);
      Alert.alert('Correct! 🎉', `Great job! ${currentCountry.name} is a beautiful country!`);
      
      // Move to next country
      setCurrentCountryIndex((currentCountryIndex + 1) % countries.length);
    } else {
      Alert.alert('Try Again! 😊', `The capital of ${currentCountry.name} is ${currentCountry.capital}`);
    }
  };

  const currentCountry = countries[currentCountryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>🌍 Mini World Explorer</Text>
        <Text style={styles.subtitle}>Learn about countries and capitals!</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Score and Level */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Score</Text>
            <Text style={styles.statValue}>{score}</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Level</Text>
            <Text style={styles.statValue}>{level}</Text>
          </View>
        </View>

        {/* Game Area */}
        <View style={styles.gameContainer}>
          <Text style={styles.questionTitle}>What is the capital of this country?</Text>
          
          <View style={styles.countryCard}>
            <Text style={styles.countryFlag}>{currentCountry.flag}</Text>
            <Text style={styles.countryName}>{currentCountry.name}</Text>
          </View>

          <Text style={styles.instruction}>Tap the correct capital:</Text>

          {/* Answer Options */}
          <View style={styles.answersContainer}>
            <TouchableOpacity 
              style={styles.answerButton}
              onPress={() => checkAnswer('Paris')}
            >
              <Text style={styles.answerText}>Paris</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.answerButton}
              onPress={() => checkAnswer('Tokyo')}
            >
              <Text style={styles.answerText}>Tokyo</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.answerButton}
              onPress={() => checkAnswer('Brasília')}
            >
              <Text style={styles.answerText}>Brasília</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.answerButton}
              onPress={() => checkAnswer('Rome')}
            >
              <Text style={styles.answerText}>Rome</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Fun Facts */}
        <View style={styles.factsContainer}>
          <Text style={styles.factsTitle}>Fun Facts About {currentCountry.name}:</Text>
          <Text style={styles.factText}>• {currentCountry.name} is a fascinating country to explore!</Text>
          <Text style={styles.factText}>• The capital {currentCountry.capital} has amazing landmarks</Text>
          <Text style={styles.factText}>• You can learn about different cultures and languages</Text>
        </View>

        {/* Start Exploring Button */}
        <TouchableOpacity style={styles.exploreButton}>
          <Text style={styles.exploreButtonText}>Start Exploring! 🚀</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    opacity: 0.9,
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 80,
  },
  statLabel: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  gameContainer: {
    padding: 20,
  },
  questionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 20,
  },
  countryCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 30,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  countryFlag: {
    fontSize: 60,
    marginBottom: 10,
  },
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  instruction: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    marginBottom: 20,
  },
  answersContainer: {
    gap: 10,
  },
  answerButton: {
    backgroundColor: '#27AE60',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  answerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  factsContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  factsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
  },
  factText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 8,
  },
  exploreButton: {
    backgroundColor: '#E74C3C',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  exploreButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App; 