import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {Layout, Colors} from '../theme';
type underLineProps = {
  color: string;
};

const Underline = ({color}: underLineProps): JSX.Element => {
  return <View style={styles.underline} />;
};

export default Underline;

const styles = StyleSheet.create({
  underline: {
    // height: Layout.SV_50,
    borderBottomColor: Colors.Primary.WHITE,
    borderBottomWidth: 1,
    // backgroundColor: 'red',
    // borderWidth: 1,
    width: Layout.SV_70,
  },
});
