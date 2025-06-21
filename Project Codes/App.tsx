import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A90E2" />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>🌍 Mini World Explorer</Text>
          <Text style={styles.subtitle}>Discover the world through adventure!</Text>
        </View>
        
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Welcome to Mini World Explorer!</Text>
            <Text style={styles.cardText}>
              This is an educational app that helps children learn about geography, 
              culture, and language through interactive experiences.
            </Text>
          </View>
          
          <View style={styles.features}>
            <Text style={styles.sectionTitle}>Features:</Text>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>• Explore countries and landmarks</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>• Learn different languages</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>• Discover cultures and traditions</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>• Interactive AR experiences</Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>• Educational games and quizzes</Text>
            </View>
          </View>
          
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Exploring! 🚀</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
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
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
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
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#7F8C8D',
    lineHeight: 24,
  },
  features: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
  },
  featureItem: {
    marginBottom: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  button: {
    backgroundColor: '#27AE60',
    borderRadius: 12,
    padding: 16,
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
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App; 