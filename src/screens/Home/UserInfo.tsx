import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {userType} from '../../types';
import {Layout, Colors, Fonts} from '../../theme';
const UserInfo = ({
  user,
  index,
  isSearchedUser,
}: {
  user: userType;
  index: number;
  isSearchedUser: boolean;
}) => {
  const {name, bananas} = user;

  const rank =
    user.userIndex && user.userIndex >= 10 ? user.userIndex + 1 : index + 1;
  const nameTextcolor = isSearchedUser
    ? Colors.Primary.RED
    : Colors.Primary.BLACK;
  return (
    <View style={styles.row}>
      <View style={styles.columContainer}>
        <Text
          style={[
            styles.columnTextStyle,
            {
              color: nameTextcolor,
            },
          ]}>
          {name}
        </Text>
      </View>

      <View style={styles.columContainer}>
        <Text style={styles.columnTextStyle}>{rank}</Text>
      </View>

      <View style={styles.columContainer}>
        <Text style={styles.columnTextStyle}>{bananas}</Text>
      </View>

      <View style={styles.columContainer}>
        <Text style={styles.columnTextStyle}>{`${isSearchedUser}`}</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: Colors.Primary.WHITE,
    marginVertical: Layout.SV_10,
  },
  columContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: Layout.SV_5,
    borderWidth: 1,
  },
  columnTextStyle: {
    fontFamily: Fonts.medium,
    fontSize: Layout.FSV_10,
    marginLeft: Layout.SV_5,
    color: Colors.Primary.BLACK,
  },
});
