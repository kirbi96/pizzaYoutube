import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {screens} from '../consts/screens';

import {Tabs} from '../tabs/Tabs';

const Stack = createStackNavigator();

export const TabsStack = (
  <>
    <Stack.Screen name={screens.MAIN_APP} component={Tabs} />
  </>
);
