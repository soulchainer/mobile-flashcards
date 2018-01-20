import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import { Constants } from 'expo';

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

export default MyStatusBar;
