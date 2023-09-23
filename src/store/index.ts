import {configureStore, combineReducers} from '@reduxjs/toolkit';
import exerciseReducer from '../reducers/exerciseSlice';

const rootReducer = combineReducers({
  exercise: exerciseReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
