import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import exercises from '../constants/exercises.json';
import {exerciseState, exerciseType, optionType} from '../types';

const initialState: exerciseState = {
  exercises: exercises,
  currentExercise: exercises[0],
  currentOption: undefined,
  currentIndex: 0,
  error: null,
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
    setNextExercise: state => {
      if (state.currentIndex + 1 < state.exercises.length) {
        //reset to next index
        state.currentIndex = state.currentIndex + 1;
        state.currentExercise = exercises[state.currentIndex];
        state.currentOption = undefined;
      } else {
        //reset to start index
        state.currentIndex = 0;
        state.currentExercise = exercises[0];
        state.currentOption = undefined;
      }
    },
  },
});

export const {setCurrentExercise, setCurrentOption, setNextExercise} =
  exerciseSlice.actions;
export default exerciseSlice.reducer;
