import {StyleSheet, View, StatusBar, Alert} from 'react-native';
import React from 'react';
import {Colors, Layout} from '../../theme';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Button} from '../../components';
import QuestionList from './QuestionList';

const Home = (): JSX.Element => {
  const {questions} = useSelector((state: RootState) => state.survey.survey);
  const {currentQuestionIndex, answers} = useSelector(
    (state: RootState) => state.survey,
  );
  const isLastQuestion = answers.length === questions.length;

  const handlesubmit = () => {
    // Here we can hit the post api with answers array to submit answers.
    Alert.alert('Answers Submitted');
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.listContainer}>
        <QuestionList
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
        />

        <Button
          text={'Submit'}
          onPress={isLastQuestion ? handlesubmit : () => {}}
          disable={!isLastQuestion}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary.REGULARONE,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: Layout.SV_10,
    backgroundColor: Colors.Primary.REGULARONE,
    paddingTop: Layout.SV_70,
    paddingBottom: Layout.SV_50,
  },
});
