import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import HistoryComponent from '../components/HistoryComponent';

export default function HistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <HistoryComponent />
    </ScrollView>
  );
}

HistoryScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#73DCF8',
  },
});
