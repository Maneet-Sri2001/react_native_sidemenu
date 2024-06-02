/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// eslint-disable-next-line prettier/prettier
// eslint-disable-next-line react-native/no-inline-styles

import React, {useEffect, useRef, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Animated,
  Image,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import home from './assets/images/home.png';
import search from './assets/images/search.png';
import notifications from './assets/images/bell.png';
import settings from './assets/images/settings.png';
import logout from './assets/images/logout.png';
import profile from './assets/images/profile.png';
// Menu
import menu from './assets/images/menu.png';
import close from './assets/images/close.png';

// Photo
import photo from './assets/images/photo.jpg';
import Routes from './src/routes/Route';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentTab, setCurrentTab] = useState('Home');
  const [showMenu, setShowMenu] = useState(false);

  const offSetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log('New Tab Selected >>> ', currentTab);
    menuButtonPress();
  }, [currentTab]);

  const menuButtonPress = () => {
    Animated.timing(scaleValue, {
      toValue: showMenu ? 1 : 0.9,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(offSetValue, {
      toValue: showMenu ? 0 : 260,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(closeButtonOffset, {
      toValue: !showMenu ? -30 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setShowMenu(!showMenu);
  };

  return (
    // <SafeAreaView style={{flex: 1}}>
    //   <StatusBar
    //     barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
    //     backgroundColor={'#010101'}
    //   />
      <Routes isLoggedIn={false} />
    // {/* </SafeAreaView> */}
    // <SafeAreaView style={styles.container}>
    //   <View style={{justifyContent: 'flex-start', padding: 13}}>
    //     <Image
    //       source={profile}
    //       style={{
    //         width: 80,
    //         height: 80,
    //         borderRadius: 40,
    //         marginTop: 20,
    //       }}></Image>
    //     <Text
    //       style={{
    //         fontSize: 20,
    //         fontWeight: 'bold',
    //         color: 'white',
    //         marginTop: 20,
    //       }}>
    //       Jenna Ezarik
    //     </Text>
    //     <TouchableOpacity>
    //       <Text
    //         style={{
    //           marginTop: 6,
    //           color: 'white',
    //         }}>
    //         View Profile
    //       </Text>
    //     </TouchableOpacity>

    //     <View style={{flexGrow: 1, marginTop: 50}}>
    //       {
    //         // Tab Bar Buttons....
    //       }
    //       {TabButton(currentTab, setCurrentTab, 'Home', home)}
    //       {TabButton(currentTab, setCurrentTab, 'Search', search)}
    //       {TabButton(currentTab, setCurrentTab, 'New Group', home)}
    //       {TabButton(currentTab, setCurrentTab, 'New Broadcast', home)}
    //       {TabButton(currentTab, setCurrentTab, 'Linked devices', home)}
    //       {TabButton(currentTab, setCurrentTab, 'Starred Messages', home)}
    //       {TabButton(currentTab, setCurrentTab, 'Payments', notifications)}
    //       {TabButton(currentTab, setCurrentTab, 'Settings', settings)}
    //     </View>
    //     <View>{TabButton(currentTab, setCurrentTab, 'LogOut', logout)}</View>
    //   </View>
    //   <Animated.View
    //     style={{
    //       flexGrow: 1,
    //       backgroundColor: 'white',
    //       position: 'absolute',
    //       top: 0,
    //       bottom: 0,
    //       left: 0,
    //       right: 0
    //       paddingHorizontal: 15,
    //       // paddingVertical: 20,
    //       borderRadius: showMenu ? 15 : 0,
    //       transform: [{scale: scaleValue}, {translateX: offSetValue}],
    //     }}>
    //     <Animated.View
    //       style={{
    //         transform: [
    //           {
    //             translateY: closeButtonOffset,
    //           },
    //         ],
    //       }}>
    //       <View
    //         style={{
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           paddingTop: showMenu ? 40 : 0,
    //           // backgroundColor: 'red',
    //         }}>
    //         <TouchableOpacity
    //           onPress={menuButtonPress}>
    //           <Image
    //             source={showMenu ? close : menu}
    //             style={{
    //               width: 20,
    //               height: 20,
    //               tintColor: 'black',
    //               // marginTop: 40,
    //             }}></Image>
    //         </TouchableOpacity>
    //         <Text
    //           style={{
    //             fontSize: 30,
    //             fontWeight: 'bold',
    //             color: 'black',
    //             paddingLeft: 20,
    //           }}>
    //           {currentTab}
    //         </Text>
    //       </View>

    //       <Image
    //         source={photo}
    //         style={{
    //           width: '100%',
    //           height: 300,
    //           borderRadius: 15,
    //           marginTop: 25,
    //         }}></Image>

    //       <Text
    //         style={{
    //           fontSize: 20,
    //           fontWeight: 'bold',
    //           paddingTop: 15,
    //           paddingBottom: 5,
    //         }}>
    //         Jenna Ezarik
    //       </Text>

    //       <Text style={{}}>
    //         Techie, YouTuber, PS Lover, Apple Sheep's Sister
    //       </Text>
    //     </Animated.View>
    //   </Animated.View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#818589',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title === 'LogOut') {
        } else {
          setCurrentTab(title);
        }
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab == title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}>
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? '#5359D1' : 'white',
          }}></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab == title ? '#5359D1' : 'white',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default App;
