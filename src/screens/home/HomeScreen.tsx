import React from 'react';
import {Text, View} from 'react-native';
import {IconHome} from '../../assets/icons/tabs/IconHome';

export const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <IconHome />
      <IconHome sizeX={133} sizeY={133} color={'red'} />
    </View>
  );
};
