import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../theme';
type ButtonProps = {
  text: string;
  onPress?: () => void;
  disable: boolean;
};

const Button = ({
  text = 'CONTINUE',
  onPress,
  disable,
}: ButtonProps): JSX.Element => {
  const color = disable ? Colors.Primary.DISABLE : Colors.Primary.GREEN;
  const textColor = disable ? Colors.Primary.DISABLETEXT : Colors.Primary.WHITE;
  const ContainerComponent: any = disable ? View : TouchableOpacity;
  return (
    <ContainerComponent
      style={[styles.container, {backgroundColor: color}]}
      onPress={disable ? () => {} : onPress}>
      <Text style={[styles.textStyle, {color: textColor}]}>{text}</Text>
    </ContainerComponent>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: Layout.SV_50,
    backgroundColor: Colors.Primary.REGULARTWO,
    justifyContent: 'center',
    borderRadius: Layout.SV_20,
    alignItems: 'center',
    marginHorizontal: Layout.SV_20,
  },
  textStyle: {
    fontFamily: Fonts.medium,
    color: Colors.Primary.WHITE,
  },
});
