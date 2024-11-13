

import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import  theme  from '../components/theme';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';


const AuthScreens = () => {
  // const handlePhoneAuth = () => {
  //   // Handle phone auth
  // };

  // const handleGoogleAuth = () => {
  //   // Handle Google auth
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Icon name="my-location" size={40} color="#6540F5"/> 
          <Text style={styles.title}>BikeTracker</Text>
          <Text style={styles.subtitle}>
            Stay connected with your riding group
          </Text>
        </View>

        <Card style={styles.authCard}>
          {/* <Button
            variant="primary"
            size="lg"
            onPress={handlePhoneAuth}
            leftIcon={<Icon name="cellphone-basic" color={theme.colors.white} size={24} />}
            style={styles.authButton}
          >
            Continue with Phone
          </Button> */}

          {/* <Button
            variant="outline"
            size="lg"
            onPress={handleGoogleAuth}
            leftIcon={
              <Icon name="google" size={40} color="#6540F5"/> 
            }
            style={styles.authButton}
          >
            Continue with Google
          </Button> */}
        </Card>

        <Text style={styles.terms}>
          By continuing, you agree to our{' '}
          <Text style={styles.link}>Terms of Service</Text> and{' '}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxl,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: theme.spacing.md,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.gray[900],
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.gray[600],
    textAlign: 'center',
  },
  authCard: {
    marginBottom: theme.spacing.xl,
  },
  authButton: {
    marginBottom: theme.spacing.sm,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  terms: {
    ...theme.typography.bodySmall,
    textAlign: 'center',
    color: theme.colors.gray[600],
  },
  link: {
    color: theme.colors.primary[500],
  },
});

export default AuthScreens;