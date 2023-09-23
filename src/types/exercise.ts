import {caseType} from './case';

export interface wordType {
  id: string;
  word: string;
  underline: boolean;
}

export interface sentenceType {
  id: string;
  words: wordType[];
}

export interface languageType {
  id: string;
  name: string;
  sentence: sentenceType;
}

export interface optionType {
  id: string;
  option: string;
  selected?: boolean;
}

export interface exerciseType {
  id: string;
  actualLanguage: languageType;
  translatedLanguage: languageType;
  options: optionType[];
  correctOption: optionType;
}

export interface exerciseState {
  exercises: exerciseType[];
  currentExercise: exerciseType;
  currentOption: optionType | undefined;
  answer?: boolean;
  currentCase: caseType;
  error: null | string;
}
