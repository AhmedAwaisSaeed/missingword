import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import userData from '../constants/usersData.json';
import {UserState, userType} from '../types';

const initialState: UserState = {
  users: userData,
  selectedUser: undefined,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<userType | undefined>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
