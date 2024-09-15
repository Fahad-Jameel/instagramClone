

import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Search from '../screens/Search';
import AddPost from '../screens/AddPost';
import Reels from '../screens/Reels';
import Profile from '../screens/Profile';
import Messages from '../screens/message';
import Activity from '../screens/Activity';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home}  />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = focused
              ? require('../../assets/icons/home.png')
              : require('../../assets/icons/home.png');
          } else if (route.name === 'Search') {
            iconSource = focused
              ? require('../../assets/icons/search.png')
              : require('../../assets/icons/search.png');
          } else if (route.name === 'AddPost') {
            iconSource = require('../../assets/icons/more.png');
          } else if (route.name === 'Reels') {
            iconSource = focused
              ? require('../../assets/icons/reels.png')
              : require('../../assets/icons/reels.png');
          } else if (route.name === 'Profile') {
            iconSource = focused
              ? require('../../assets/icons/user.png')
              : require('../../assets/icons/user.png');
          }

          return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Reels" component={Reels} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}