import React from 'react';
import {
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
      style && style.TextButton,
      disabled && defaultStyles['TextButton--disabled'],
      disabled && style && style['TextButton--disabled'],
    ]}
  >
    <Text
      style={[
        defaultStyles['TextButton-text'],
        style && style['TextButton-text'],
        disabled && defaultStyles['TextButton-text--disabled'],
        disabled && style && style['TextButton--text-disabled'],
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default TextButton;
