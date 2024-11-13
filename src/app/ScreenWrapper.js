// ScreenWrapper.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function ScreenWrapper({ children }) {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
