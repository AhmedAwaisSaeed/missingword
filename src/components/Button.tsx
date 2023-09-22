import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../theme';

type ButtonProps = {
  text: string;
  onPress?: () => void;
};

const Button = ({text = 'Search', onPress}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: Layout.SV_60,
    flex: 1,
    backgroundColor: Colors.Primary.WHITE,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: Layout.SV_10,
    alignItems: 'center',
    marginLeft: Layout.SV_10,
  },
  textStyle: {
    fontFamily: Fonts.regular,
    color: Colors.Primary.BLACK,
  },
});
