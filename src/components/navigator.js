


import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Messages from '../screens/message';
import Activity from '../screens/Activity';

const Tab = createBottomTabNavigator();

export default function AboveNavigator() {
  return (

    <Tab.Navigator  >
      <Tab.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
      <Tab.Screen name="Activity" component={Activity} options={{ headerShown: false }} />
      
    </Tab.Navigator>
    
    
  );
}