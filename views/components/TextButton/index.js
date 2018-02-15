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
    activeOpacity={0.6}
    disabled={disabled}
    style={[
      defaultStyles.TextButton,
      defaultStyles[`TextButton--${Platform.OS}`],
      disabled && defaultStyles[`TextButton--disabled`],
      disabled && style && style[`TextButton--disabled-${Platform.OS}`],
      style && style.TextButton,
      style && style[`TextButton--${Platform.OS}`],
    ]}
  >
    <Text
      style={[
        defaultStyles['TextButton-text'],
        defaultStyles[`TextButton-text--${Platform.OS}`],
        disabled && defaultStyles[`TextButton-text--disabled`],
        disabled && style && style[`TextButton-text--disabled-${Platform.OS}`],
        style && style['TextButton-text'],
        style && style[`TextButton-text--${Platform.OS}`],
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default TextButton;
