import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {SafeAreaView, StyleSheet} from 'react-native';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
