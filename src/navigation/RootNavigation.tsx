import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const RootNavigation = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
export default RootNavigation;
