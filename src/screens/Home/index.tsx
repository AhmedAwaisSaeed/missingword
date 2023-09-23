import {StyleSheet, View, Alert, Text} from 'react-native';
import React, {useState} from 'react';
import {Colors, Layout, Fonts} from '../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
// import {setAnswer} from '../../reducers/exerciseSlice';
import {Sentence, Button} from '../../components';
import OptionList from './OptionList';
const Home = (): JSX.Element => {
  const {exercises, currentExercise, currentOption} = useSelector(
    (state: RootState) => state.exercise,
  );

  const {actualLanguage, translatedLanguage, options, correctOption} =
    currentExercise;

  const [answer, setAnswer] = useState<boolean | undefined>(undefined);

  console.log('exercise===', exercises);
  console.log('words===', actualLanguage.sentence.words);
  const isOptionSelected = currentOption ? true : false;

  const onPressCheckAnswer = () => {
    if (!currentOption) {
      Alert.alert('Please select any option first');
    } else {
      if (currentOption.id === correctOption.id) {
        setAnswer(true);
      } else {
        setAnswer(false);
      }
    }
  };

  const getButtonText = () => {
    switch (answer) {
      case true:
        return 'CONTINUE';
      case false:
        return 'CONTINUE';
      default:
        if (!isOptionSelected) {
          return 'CONTINUE';
        } else {
          return 'CHECK ANSWER';
        }
    }
  };

  const getButtonSectionBackgroundColor = () => {
    switch (answer) {
      case true:
        return Colors.Primary.SUCCESS;
      case false:
        return Colors.Primary.FAILURE;
      default:
        return Colors.Primary.REGULARONE;
    }
  };

  const getButtonBackgroundColor = () => {
    switch (answer) {
      case true:
        return Colors.Primary.WHITE;
      case false:
        return Colors.Primary.WHITE;
      default:
        if (isOptionSelected) {
          return Colors.Primary.SUCCESS;
        } else {
          return Colors.Primary.REGULARTWO;
        }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstSectionContainer}>
        <Sentence
          text={'Fill in the missing word'}
          style={styles.sentenceContainer}
          textStyle={styles.labelTextStyle}
          answer={answer}
        />

        <Sentence
          words={actualLanguage.sentence.words}
          style={styles.sentenceContainer}
          textStyle={styles.completeSentenceTextStyle}
          currentOption={currentOption}
          answer={answer}
        />

        <Sentence
          words={translatedLanguage.sentence.words}
          style={styles.sentenceContainer}
          textStyle={styles.completeSentenceTextStyle}
          currentOption={currentOption}
          answer={answer}
        />
      </View>
      <View style={styles.secondSectionContainer}>
        <OptionList options={options} answer={answer} />
      </View>

      <View
        style={[
          styles.buttonSection,
          {
            backgroundColor: getButtonSectionBackgroundColor(),
          },
        ]}>
        {answer === true ? (
          <Text style={styles.answerStyle}>Great Job</Text>
        ) : answer !== undefined ? (
          <Text style={styles.answerStyle}>Answer: {correctOption.option}</Text>
        ) : (
          <Text />
        )}
        <Button
          text={getButtonText()}
          customStyle={{
            backgroundColor: getButtonBackgroundColor(),
          }}
          onPress={onPressCheckAnswer}
          answer={answer}
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
  firstSectionContainer: {
    flex: 0.2,
    paddingHorizontal: Layout.SV_10,
    backgroundColor: Colors.Primary.REGULARONE,
    paddingTop: Layout.SV_70,
    alignItems: 'center',
  },

  sentenceContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: Layout.SV_10,
    // backgroundColor: 'red',
  },
  labelTextStyle: {
    fontSize: Layout.FSV_10,
    fontFamily: Fonts.light,
    color: Colors.Primary.GREY,
  },
  completeSentenceTextStyle: {
    fontSize: Layout.FSV_12,
    fontFamily: Fonts.light,
    color: Colors.Primary.GREY,
  },

  secondSectionContainer: {
    flex: 1,
    marginTop: Layout.SV_50,
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  buttonSection: {
    flex: 0.3,
    // justifyContent: 'center',
    borderRadius: Layout.SV_10,
    backgroundColor: 'orange',
  },

  answerStyle: {
    fontSize: Layout.FSV_12,
    fontFamily: Fonts.bold,
    color: Colors.Primary.WHITE,
    paddingLeft: Layout.SV_30,
    marginVertical: Layout.SV_10,
  },
  buttonStyle: {
    backgroundColor: Colors.Primary.SUCCESS,
  },
});
