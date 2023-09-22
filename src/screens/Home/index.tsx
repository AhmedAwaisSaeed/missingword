import {StyleSheet, View, KeyboardAvoidingView, Alert} from 'react-native';
import React, {useState} from 'react';
import SearchInput from './SearchInput';
import {Button} from '../../components';
import {Layout} from '../../theme';
import {IS_ANDROID} from '../../utils';
import UserTable from './UserTable';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setUser} from '../../reducers/userSlice';
import {findUser} from '../../utils';
const Home = (): JSX.Element => {
  const [searchedUser, setSearchedUser] = useState('');
  const users = useSelector((state: RootState) => state.user.users);
  const selectedUser = useSelector(
    (state: RootState) => state.user.selectedUser,
  );
  const dispatch = useDispatch();

  const handleSearch = () => {
    let foundUser = findUser(users, searchedUser);
    if (foundUser) {
      dispatch(setUser(foundUser));
    } else {
      dispatch(setUser(undefined));
      Alert.alert(
        'This user name does not exist! Please specify an existing user name!',
      );
    }
  };
  const alignItems = selectedUser ? 'flex-end' : 'center';
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidContainer}
        behavior={IS_ANDROID ? undefined : 'padding'}>
        <View
          style={[
            styles.rowContainer,
            {
              alignItems: alignItems,
            },
          ]}>
          <SearchInput
            searchedUser={searchedUser}
            setSearchedUser={setSearchedUser}
          />
          <Button text={'Search'} onPress={handleSearch} />
        </View>
        {selectedUser && <UserTable />}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: Layout.SV_10,
  },
  keyboardAvoidContainer: {
    flex: 1,
  },
  rowContainer: {
    flex: 1,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
