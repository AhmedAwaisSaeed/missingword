import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {surveyState} from '../types';
import survey from '../constants/questions.json';

const initialState: surveyState = {
  survey: survey,
  currentQuestionIndex: 0,
  answers: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answers[state.currentQuestionIndex] = {
        id: state.survey.questions[state.currentQuestionIndex].id,
        answer: action.payload,
      };
      if (state.currentQuestionIndex < state.survey.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    resetSurvey: state => {
      state.currentQuestionIndex = 0;
      state.answers = [];
    },
  },
});

export const {setAnswer, resetSurvey} = surveySlice.actions;

export default surveySlice.reducer;
