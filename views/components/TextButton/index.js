import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import defaultStyles from './styles';

const TextButton = ({
  onPress,
  label,
  style = defaultStyles,
}) => (
  <TouchableOpacity
    style={[
      style.TextButton,
      style[`TextButton--${Platform.OS}`],
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        style['TextButton-text'],
        style[`TextButton-text--${Platform.OS}`],
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default TextButton;
