import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Layout, Colors, Fonts} from '../theme';
import {optionType} from '../types';

type optionProps = {
  option: optionType;
  color: string;
  textColor: string;
};

const Option = ({option, color, textColor}: optionProps): JSX.Element => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color,
        },
      ]}>
      <Text
        style={[
          styles.textStyle,
          {
            color: textColor,
          },
        ]}>
        {option.option}
      </Text>
    </View>
  );
};

export default Option;

const styles = StyleSheet.create({
  container: {
    padding: Layout.SV_10,
    backgroundColor: Colors.Primary.WHITE,
    borderRadius: Layout.SV_10,
    marginHorizontal: Layout.SV_2,
  },
  textStyle: {
    fontFamily: Fonts.medium,
  },
});
