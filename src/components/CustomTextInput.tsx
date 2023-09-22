import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {Fonts, Colors, Layout} from '../theme';
type TextInputProps = {
  placeholder?: string;
  onChangeText?: (value: string) => void;
  value?: string;
  placeholderTextColor?: string;
};

const CustomTextInput = ({
  placeholder = 'Enter name',
  onChangeText,
  value,
  placeholderTextColor,
}: TextInputProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize="none"
        style={styles.textStyle}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: Layout.SV_10,
  },
  textStyle: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: Layout.FSV_12,
    color: Colors.Primary.BLACK,
  },
});
