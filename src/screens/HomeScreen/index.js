import {Text, View} from 'react-native';
import React, {useEffect} from 'react';

const HomeScreen = () => {

  useEffect(() => {
    console.log('Home Screens')
  }, []);

  return (
    <View>
      <Text > HomeScreen</Text>
    </View>
  )
}

export default HomeScreen;

