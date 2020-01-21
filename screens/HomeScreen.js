import MapView from 'react-native-maps';
import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import LocationComponent from '../components/MapComponent';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LocationComponent />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
