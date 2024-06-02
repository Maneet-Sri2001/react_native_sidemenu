import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStack } from './AuthRoute';
import { AppStack } from './AppRoute';


const Stack = createStackNavigator();
const RootStack = createStackNavigator();

const Routes = ({isLoggedIn}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        gestureEnabled: true,
        headerShown: false
      }}>
        {!isLoggedIn ? (
          <RootStack.Screen 
          name='Auth'
          component={AuthStack}
          options={{animationEnabled: false}}/>
        ) : (
          <RootStack.Screen 
          name='App'
          component={AppStack}
          options={{animationEnabled: true}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes