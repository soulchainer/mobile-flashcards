import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import defaultStyles from './styles';

const TextButton = ({
  onPress,
  disabled,
  label,
  style = defaultStyles,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      style.TextButton,
      style[`TextButton--${Platform.OS}`],
    ]}
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
