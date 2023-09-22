import {StyleSheet, View, ImageRequireSource, Image} from 'react-native';
import React from 'react';
type iconProps = {
  source: ImageRequireSource;
  color: string;
};

const Icon = ({source, color}: iconProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={source} style={{tintColor: color}} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {},
});
