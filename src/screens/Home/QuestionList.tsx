import {FlatList} from 'react-native';
import React from 'react';
import {questionType} from '../../types';
import QuestionInfo from './QuestionInfo';
import {useDispatch} from 'react-redux';
import {setAnswer} from '../../reducers/surveySlice';
type questionProps = {
  questions: questionType[];
  currentQuestionIndex: number;
};

const QuestionList = ({
  questions,
  currentQuestionIndex,
}: questionProps): JSX.Element => {
  const dispatch = useDispatch();
  const handleNextButton = (answer: string) => {
    dispatch(setAnswer(answer));
  };

  const _renderQuestion = ({
    item,
    index,
  }: {
    item: questionType;
    index: number;
  }) => {
    const active = currentQuestionIndex === index ? true : false;
    return (
      <QuestionInfo
        item={item}
        key={index}
        handleNextButton={handleNextButton}
        active={active}
      />
    );
  };

  return (
    <FlatList
      scrollEnabled={true}
      data={questions}
      renderItem={_renderQuestion}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default QuestionList;
