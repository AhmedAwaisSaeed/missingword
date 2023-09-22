import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomTextInput, Icon} from '../../components';
import {Colors, Layout, Images} from '../../theme';
const SearchInput = ({
  searchedUser,
  setSearchedUser,
}: {
  searchedUser: string;
  setSearchedUser: (text: string) => void;
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <Icon source={Images.searchIcon} color={Colors.Primary.REGULAR} />
      <CustomTextInput
        placeholder="User name.."
        onChangeText={setSearchedUser}
        value={searchedUser}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Layout.SV_60,
    flexDirection: 'row',
    backgroundColor: Colors.Primary.WHITE,
    borderWidth: 1,
    alignItems: 'center',
    paddingLeft: Layout.SV_10,
    borderRadius: Layout.SV_10,
  },
});
