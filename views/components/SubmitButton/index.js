import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';
import defaultStyles from './styles';

const SubmitBtn = ({
  onPress,
  label = 'Submit',
  style = defaultStyles,
}) => (
  <TouchableOpacity
    style={[
      style.SubmitBtn,
      style[`SubmitBtn--${Platform.OS}`],
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        style['SubmitBtn-text'],
        style[`SubmitBtn-text--${Platform.OS}`],
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default SubmitBtn;
