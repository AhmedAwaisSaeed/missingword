import {Platform} from 'react-native';
export const IS_ANDROID = Platform.OS === 'android';
import {record, userType} from '../types';

const findUser = (users: record, searchedUser: string) => {
  let foundUser = null;
  for (const key in users) {
    if (users.hasOwnProperty(key)) {
      const obj = users[key];

      if (obj.name?.toLowerCase() === searchedUser?.toLowerCase()) {
        foundUser = obj;
        break;
      }
    }
  }

  return foundUser;
};

const convertObjectToSortedArray = (users: record) => {
  return Object.values(users).sort((a, b) => b.bananas - a.bananas);
};

const TopTenUsers = (rankedUsers: userType[]) => {
  return rankedUsers.slice(0, 10);
};

export {findUser, convertObjectToSortedArray, TopTenUsers};
