import React from 'react';
// import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {screens} from '../consts/screens';
import Navigation from '../../base/Navigation';
import {HomeScreen} from "../../screens/home/HomeScreen";
import {BasketScreen} from "../../screens/home/BasketScreen";

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
      <Tab.Screen
        name={screens.HOME}
        component={HomeScreen}
        options={({route}: any) => ({
          tabBarLabel: 'Главная',
          // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),
        })}
      />

      <Tab.Screen
        name={screens.BASKET}
        component={BasketScreen}
        options={({route}: any) => ({
          tabBarLabel: 'Корзина',
          // tabBarIcon: ({ focused }) => (focused ? <FocusedIcon /> : <Icon />),
          // tabBarVisible: getTabBarVisible(route),
        })}
      />
    </Tab.Navigator>
  );
};
