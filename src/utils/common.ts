import {Platform} from 'react-native';
export const IS_ANDROID = Platform.OS === 'android';
import {caseType, optionType} from '../types';

const getSpecificCase = (
  answer: boolean | undefined,
  currentOption: optionType | undefined,
) => {
  if (currentOption && answer) {
    //true answer case
    return caseType.RIGHT_ANSWER_CASE;
  } else if (currentOption && answer === false) {
    // false answer case
    return caseType.WRONG_ANSWER_CASE;
  } else if (answer === undefined && currentOption) {
    // option selected but not checking answer
    return caseType.OPTION_SELECTED_CASE;
  } else {
    return caseType.DEFAULT_CASE;
  }
};

export {getSpecificCase};
