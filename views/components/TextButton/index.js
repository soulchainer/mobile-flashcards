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
  style
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={[
      defaultStyles.TextButton,
      defaultStyles[`TextButton--${Platform.OS}`],
      style && style.TextButton,
      style && style[`TextButton--${Platform.OS}`],
    ]}
  >
    <Text
      style={[
        defaultStyles['TextButton-text'],
        defaultStyles[`TextButton-text--${Platform.OS}`],
        style && style['TextButton-text'],
        style && style[`TextButton-text--${Platform.OS}`],
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default TextButton;
