export interface questionType {
  id: number;
  question: string;
  prompt: string;
}

export interface surveyType {
  survey_id: string;
  questions: questionType[];
}

export interface answerType {
  id: number;
  answer: string;
}

export interface surveyState {
  survey: surveyType;
  currentQuestionIndex: number;
  answers: answerType[];
}
