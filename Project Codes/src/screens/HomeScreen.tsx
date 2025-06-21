import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useUser } from '../context/UserContext';
import { useProgress } from '../context/ProgressContext';
import { theme, gradients, childColors } from '../utils/theme';

const HomeScreen: React.FC = () => {
  const { user } = useUser();
  const { progress } = useProgress();

  if (!user) return null;

  const recentCountries = progress?.countries.slice(-3) || [];
  const totalExperience = progress?.totalExperience || 0;
  const totalCoins = progress?.totalCoins || 0;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={gradients.primary}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <View style={styles.userInfo}>
              <Text style={styles.greeting}>Hello, {user.name}! 👋</Text>
              <Text style={styles.subtitle}>Ready for your next adventure?</Text>
            </View>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>{user.avatar.name}</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Stats Cards */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Icon name="star" size={24} color={childColors.yellow} />
            <Text style={styles.statValue}>{user.level}</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="trending-up" size={24} color={childColors.green} />
            <Text style={styles.statValue}>{totalExperience}</Text>
            <Text style={styles.statLabel}>XP</Text>
          </View>
          <View style={styles.statCard}>
            <Icon name="coin" size={24} color={childColors.orange} />
            <Text style={styles.statValue}>{totalCoins}</Text>
            <Text style={styles.statLabel}>Coins</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity style={styles.actionCard}>
              <Icon name="earth" size={32} color={theme.colors.primary} />
              <Text style={styles.actionText}>Explore World</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Icon name="target" size={32} color={theme.colors.secondary} />
              <Text style={styles.actionText}>Missions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Icon name="camera" size={32} color={theme.colors.accent} />
              <Text style={styles.actionText}>AR Experience</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionCard}>
              <Icon name="trophy" size={32} color={childColors.purple} />
              <Text style={styles.actionText}>Achievements</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Adventures</Text>
          {recentCountries.length > 0 ? (
            recentCountries.map((countryProgress, index) => (
              <View key={index} style={styles.activityCard}>
                <View style={styles.activityIcon}>
                  <Icon name="flag" size={20} color={theme.colors.primary} />
                </View>
                <View style={styles.activityContent}>
                  <Text style={styles.activityTitle}>
                    Explored {countryProgress.countryId}
                  </Text>
                  <Text style={styles.activitySubtitle}>
                    {countryProgress.landmarksVisited.length} landmarks visited
                  </Text>
                </View>
                <Text style={styles.activityTime}>
                  {new Date(countryProgress.lastVisited).toLocaleDateString()}
                </Text>
              </View>
            ))
          ) : (
            <View style={styles.emptyState}>
              <Icon name="map-marker-question" size={48} color={theme.colors.textSecondary} />
              <Text style={styles.emptyText}>No adventures yet!</Text>
              <Text style={styles.emptySubtext}>Start exploring the world</Text>
            </View>
          )}
        </View>

        {/* Daily Challenge */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Daily Challenge</Text>
          <LinearGradient
            colors={gradients.success}
            style={styles.challengeCard}
          >
            <View style={styles.challengeContent}>
              <Text style={styles.challengeTitle}>Learn 5 New Phrases</Text>
              <Text style={styles.challengeDescription}>
                Practice languages from different countries
              </Text>
              <TouchableOpacity style={styles.challengeButton}>
                <Text style={styles.challengeButtonText}>Start Challenge</Text>
              </TouchableOpacity>
            </View>
            <Icon name="lightbulb" size={48} color={theme.colors.surface} />
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.xl,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flex: 1,
  },
  greeting: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: 'bold',
    color: theme.colors.surface,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.surface,
    opacity: 0.9,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    fontSize: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.lg,
    marginTop: -theme.spacing.lg,
    zIndex: 1,
  },
  statCard: {
    flex: 1,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginHorizontal: theme.spacing.xs,
    alignItems: 'center',
    ...theme.shadows.medium,
  },
  statValue: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginTop: theme.spacing.xs,
  },
  statLabel: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  section: {
    paddingHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.xl,
  },
  sectionTitle: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    ...theme.shadows.small,
  },
  actionText: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    ...theme.shadows.small,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    color: theme.colors.text,
  },
  activitySubtitle: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  activityTime: {
    fontSize: theme.typography.caption.fontSize,
    color: theme.colors.textSecondary,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
  },
  emptyText: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: '600',
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
  },
  emptySubtext: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  challengeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
  },
  challengeContent: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'bold',
    color: theme.colors.surface,
    marginBottom: theme.spacing.xs,
  },
  challengeDescription: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.surface,
    opacity: 0.9,
    marginBottom: theme.spacing.md,
  },
  challengeButton: {
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.borderRadius.md,
    alignSelf: 'flex-start',
  },
  challengeButtonText: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: '600',
    color: theme.colors.primary,
  },
});

export default HomeScreen; 