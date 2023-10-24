import {configureStore, combineReducers} from '@reduxjs/toolkit';
import surveyReducer from '../reducers/surveySlice';

const rootReducer = combineReducers({
  survey: surveyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
