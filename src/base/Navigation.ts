import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/core';
import {screens} from '../navigator/consts/screens';

export interface NavigationParams {
  [key: string]: any;
}

class NavigationC {
  navigationRef = React.createRef<NavigationContainerRef>();

  initialRoute = screens.MAIN_APP;

  setInitialRoute = (route: string) => {
    this.initialRoute = route;
  };

  navigate = (routeName: string, params?: NavigationParams) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(
      () => this.navigationRef.current?.navigate(routeName, params),
      0,
    );
  };

  replace = (routeName: string, params?: NavigationParams) => {
    // https://github.com/react-navigation/react-navigation/issues/6879
    setTimeout(
      () =>
        this.navigationRef.current?.reset({
          index: 0,
          routes: [{name: routeName, params: params}],
        }),
      0,
    );
  };

  pop = () => {
    this.navigationRef.current?.goBack();
  };

  pop2 = () => {
    this.pop();
    this.pop();
  };
}

const Navigation = new NavigationC();
export default Navigation;
