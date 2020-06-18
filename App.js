import React from 'react';

import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useState} from 'react';

const App = () => {
  // https://us1.locationiq.com/v1/reverse.php?key=68e73a2b14084c&lat=-37.870662&lon=144.9803321&format=json

  const [location, setLocation] = useState([
    {latitude: 37.78825, longitude: -122.4324},
    {latitude: 37.78825, longitude: -122.5324},
    {latitude: 37.78825, longitude: -122.3324},
    {latitude: 37.71825, longitude: -122.3324},
    {latitude: 37.71825, longitude: -122.4324},
    {latitude: 37.71825, longitude: -122.5324},
  ]);

  return (
    <SafeAreaView style={styles.pages}>
      <View style={styles.navbar}>
        <Text style={styles.h7BlueRegularText}>KIRIM Location</Text>
      </View>
      <MapView
        style={{height: 300}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        onUserLocationChange={() => console.log('xixi')}
        onRegionChangeComplete={val => console.log(val)}>
        {location.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={{latitude: item.latitude, longitude: item.longitude}}
            />
          );
        })}
      </MapView>
      <ScrollView>
        <View style={{padding: 24}}>
          <View style={styles.rowBetween}>
            <Text style={styles.p1GrayMediumText}>KIRIM Gadjahmada</Text>
            <Text style={styles.h7GrayRegularText}>0.1 KM</Text>
          </View>
          <View style={{height: 24}} />
          <Text style={styles.p2GrayRegularText}>Mo: +62 81241 823</Text>
          <View style={{height: 24}} />
          <Text style={styles.p2GrayRegularText}>232 Yukon Street Scres</Text>
          <View style={{height: 24}} />
          <Text style={styles.p2GrayRegularText}>Astor Place Kenedya</Text>
          <View style={{height: 24}} />
          <Text style={styles.p2GrayRegularText}>Jakarta, Central Jakarta</Text>
          <View style={{height: 24}} />
          <Text style={styles.p2GrayRegularText}>10110 Indonesia</Text>
          <View style={{height: 40}} />
          <Text style={styles.h6BlueRegularText}>
            Open Time{' '}
            <Text style={styles.h6BlueMediumText}>08:00 to 20:00</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pages: {flex: 1, ...StyleSheet.absoluteFillObject},
  navbar: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  h7GrayRegularText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'grey',
  },
  p1GrayMediumText: {
    fontSize: 14,
    fontWeight: '700',
  },
  p2GrayRegularText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'grey',
  },
  h7BlueRegularText: {
    color: 'royalblue',
    fontSize: 16,
    fontWeight: '600',
  },
  h6BlueRegularText: {
    color: 'royalblue',
    fontSize: 18,
    fontWeight: '600',
  },
  h6BlueMediumText: {
    color: 'royalblue',
    fontSize: 18,
    fontWeight: '800',
  },
});

export default App;
