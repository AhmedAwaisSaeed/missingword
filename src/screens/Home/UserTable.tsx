import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import UserInfo from './UserInfo';
import {userType} from '../../types';
import {TableHeader} from '../../components';
import {Colors} from '../../theme';
import {convertObjectToSortedArray, TopTenUsers} from '../../utils';
const UserTable = (): JSX.Element => {
  const users = useSelector((state: RootState) => state.user.users);
  const selectedUser = useSelector(
    (state: RootState) => state.user.selectedUser,
  );
  const rankedUsers = convertObjectToSortedArray(users);

  const TopUsers = TopTenUsers(rankedUsers);
  if (selectedUser) {
    const userIndex = rankedUsers.findIndex(
      user => user.uid === selectedUser.uid,
    );
    if (userIndex >= 10) {
      TopUsers.pop();
      TopUsers.push({...selectedUser, userIndex: userIndex});
    }
  }

  const _renderItem = ({item, index}: {item: userType; index: number}) => {
    const isSearchedUser = selectedUser?.uid === item.uid ? true : false;
    return (
      <UserInfo
        key={index}
        user={item}
        index={index}
        isSearchedUser={isSearchedUser}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TableHeader />
      <FlatList data={TopUsers} renderItem={_renderItem} />
    </View>
  );
};

export default UserTable;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary.WHITE,
  },
});
