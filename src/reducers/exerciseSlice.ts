import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import exercises from '../constants/exercises.json';
import {exerciseState, exerciseType, optionType} from '../types';

const initialState: exerciseState = {
  exercises: exercises,
  currentExercise: exercises[0],
  currentOption: undefined,
  error: null,
  answer: undefined,
};

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    setCurrentExercise: (state, action: PayloadAction<exerciseType>) => {
      state.currentExercise = action.payload;
    },
    setCurrentOption: (state, action: PayloadAction<optionType>) => {
      state.currentOption = action.payload;
    },
    setAnswer: (state, action: PayloadAction<boolean>) => {
      state.answer = action.payload;
    },
  },
});

export const {setCurrentExercise, setCurrentOption, setAnswer} =
  exerciseSlice.actions;
export default exerciseSlice.reducer;
