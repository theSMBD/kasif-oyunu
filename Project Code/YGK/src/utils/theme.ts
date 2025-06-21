import { Theme } from '../types';

export type { Theme };

export const theme: Theme = {
  colors: {
    primary: '#4A90E2', // Bright blue
    secondary: '#F39C12', // Orange
    accent: '#E74C3C', // Red
    background: '#F8F9FA', // Light gray
    surface: '#FFFFFF', // White
    text: '#2C3E50', // Dark blue-gray
    textSecondary: '#7F8C8D', // Medium gray
    border: '#E5E7EB', // Light gray
    success: '#27AE60', // Green
    warning: '#F1C40F', // Yellow
    error: '#E74C3C', // Red
    info: '#3498DB', // Blue
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    caption: {
      fontSize: 14,
      fontWeight: 'normal',
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
};

// Child-friendly color palette
export const childColors = {
  // Primary colors for children
  blue: '#4A90E2',
  green: '#27AE60',
  orange: '#F39C12',
  red: '#E74C3C',
  purple: '#9B59B6',
  pink: '#E91E63',
  yellow: '#F1C40F',
  teal: '#1ABC9C',
  
  // Pastel variations
  lightBlue: '#AED6F1',
  lightGreen: '#A9DFBF',
  lightOrange: '#FAD7A0',
  lightRed: '#F1948A',
  lightPurple: '#D7BDE2',
  lightPink: '#F8BBD9',
  lightYellow: '#FDEAA7',
  lightTeal: '#A2D9CE',
  
  // Neutral colors
  white: '#FFFFFF',
  lightGray: '#F8F9FA',
  gray: '#E5E7EB',
  darkGray: '#7F8C8D',
  black: '#2C3E50',
};

// Gradient configurations
export const gradients = {
  primary: ['#4A90E2', '#357ABD'],
  secondary: ['#F39C12', '#E67E22'],
  success: ['#27AE60', '#229954'],
  warning: ['#F1C40F', '#F39C12'],
  error: ['#E74C3C', '#C0392B'],
  rainbow: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'],
  sunset: ['#FF6B6B', '#FFE66D', '#4ECDC4'],
  ocean: ['#667eea', '#764ba2'],
  forest: ['#11998e', '#38ef7d'],
  fire: ['#f093fb', '#f5576c'],
};

// Animation configurations
export const animations = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// Shadow configurations
export const shadows = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.27,
    elevation: 10,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10.32,
    elevation: 16,
  },
}; 