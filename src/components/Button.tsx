import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../theme';
import {caseType} from '../types';
type ButtonProps = {
  text: string;
  onPress?: () => void;
  customStyle: ViewStyle;
  currentCase: caseType;
};

const Button = ({
  text = 'CONTINUE',
  onPress,
  customStyle,
  currentCase,
}: ButtonProps): JSX.Element => {
  const getTextColor = () => {
    switch (currentCase) {
      case caseType.RIGHT_ANSWER_CASE:
        return Colors.Primary.SUCCESS;
      case caseType.WRONG_ANSWER_CASE:
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
