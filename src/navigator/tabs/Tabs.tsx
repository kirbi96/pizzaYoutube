import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../consts/screens';
import Navigation from '../../base/Navigation';

const Tab = createBottomTabNavigator();

// const getTabBarVisible = (route: any) => {
//   const routeName = getFocusedRouteNameFromRoute(route);
//
//   if (!routeName) {
//     return true;
//   }
//
//   return hideOnScreens.indexOf(routeName) === -1;
// };

export const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName={Navigation.initialRoute}>
      {/*<Tab.Screen*/}
      {/*  name={screens.TAB_HOME}*/}
      {/*  component={HomeStack}*/}
      {/*  options={{*/}
      {/*    tabBarLabel: 'Main',*/}
      {/*    // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<Tab.Screen*/}
      {/*  name={screens.TAB_SECOND}*/}
      {/*  component={SecondStack}*/}
      {/*  options={({route}: any) => ({*/}
      {/*    tabBarLabel: 'second',*/}
      {/*    // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),*/}
      {/*    tabBarVisible: getTabBarVisible(route),*/}
      {/*  })}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
};
