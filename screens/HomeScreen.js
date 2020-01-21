import MapView from 'react-native-maps';
import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  Button
} from 'react-native';

import LocationComponent from '../components/MapComponent';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          alert('Are you ready to run ?');
        }}
        title="RUN"
      />
      {/* <LocationComponent /> */}
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
  },
  
});
