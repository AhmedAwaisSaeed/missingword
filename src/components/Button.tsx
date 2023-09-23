import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../theme';

type ButtonProps = {
  text: string;
  onPress?: () => void;
  customStyle: ViewStyle;
  answer?: boolean;
};

const Button = ({
  text = 'CONTINUE',
  onPress,
  customStyle,
  answer,
}: ButtonProps): JSX.Element => {
  const getTextColor = () => {
    switch (answer) {
      case true:
        return Colors.Primary.SUCCESS;
      case false:
        return Colors.Primary.FAILURE;
      default:
        return Colors.Primary.WHITE;
    }
  };

  return (
    <TouchableOpacity style={[styles.container, customStyle]} onPress={onPress}>
      <Text style={[styles.textStyle, {color: getTextColor()}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: Layout.SV_50,
    backgroundColor: Colors.Primary.REGULARTWO,
    justifyContent: 'center',
    // borderWidth: 1,
    borderRadius: Layout.SV_20,
    alignItems: 'center',
    marginHorizontal: Layout.SV_20,
  },
  textStyle: {
    fontFamily: Fonts.medium,
    color: Colors.Primary.WHITE,
  },
});
