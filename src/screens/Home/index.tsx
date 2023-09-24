import {StyleSheet, View, Alert, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Colors, Layout, Fonts} from '../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {getSpecificCase} from '../../utils';
import {caseType} from '../../types';
import {Sentence, Button} from '../../components';
import OptionList from './OptionList';
import {setNextExercise} from '../../reducers/exerciseSlice';
const Home = (): JSX.Element => {
  const dispatch = useDispatch();
  const {currentExercise, currentOption} = useSelector(
    (state: RootState) => state.exercise,
  );

  const {actualLanguage, translatedLanguage, options, correctOption} =
    currentExercise;

  const [answer, setAnswer] = useState<boolean | undefined>(undefined);
  const currentCase = getSpecificCase(answer, currentOption);

  const onPressCheckAnswer = () => {
    if (!currentOption) {
      Alert.alert('Please select any option first');
    } else {
      if (
        currentCase === caseType.RIGHT_ANSWER_CASE ||
        currentCase === caseType.WRONG_ANSWER_CASE
      ) {
        // dispatch next Exercise
        setAnswer(undefined);
        dispatch(setNextExercise());
        return;
      }
      if (currentOption.id === correctOption.id) {
        setAnswer(true);
      } else {
        setAnswer(false);
      }
    }
  };

  const getButtonText = () => {
    switch (currentCase) {
      case caseType.RIGHT_ANSWER_CASE:
        return 'CONTINUE';
      case caseType.WRONG_ANSWER_CASE:
        return 'CONTINUE';
      case caseType.OPTION_SELECTED_CASE:
        return 'CHECK ANSWER';
      default:
        return 'CONTINUE';
    }
  };

  const getButtonSectionBackgroundColor = () => {
    switch (currentCase) {
      case caseType.RIGHT_ANSWER_CASE:
        return Colors.Primary.SUCCESS;
      case caseType.WRONG_ANSWER_CASE:
        return Colors.Primary.FAILURE;
      default:
        return Colors.Primary.REGULARONE;
    }
  };

  const getButtonBackgroundColor = () => {
    switch (currentCase) {
      case caseType.RIGHT_ANSWER_CASE:
        return Colors.Primary.WHITE;
      case caseType.WRONG_ANSWER_CASE:
        return Colors.Primary.WHITE;
      case caseType.OPTION_SELECTED_CASE:
        return Colors.Primary.SUCCESS;
      default:
        return Colors.Primary.REGULARTWO;
    }
  };

  const getButtonSectionText = () => {
    switch (currentCase) {
      case caseType.RIGHT_ANSWER_CASE:
        return 'Great Job';
      case caseType.WRONG_ANSWER_CASE:
        return 'Answer: ' + correctOption.option;
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.firstSectionContainer}>
        <Sentence
          text={'Fill in the missing word'}
          style={styles.sentenceContainer}
          textStyle={styles.labelTextStyle}
          currentCase={currentCase}
        />

        <Sentence
          words={actualLanguage.sentence.words}
          style={styles.sentenceContainer}
          textStyle={styles.completeSentenceTextStyle}
          currentOption={currentOption}
          currentCase={currentCase}
        />

        <Sentence
          words={translatedLanguage.sentence.words}
          style={styles.sentenceContainer}
          textStyle={styles.completeSentenceTextStyle}
          currentOption={currentOption}
          currentCase={currentCase}
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
        <Text style={styles.answerStyle}>{getButtonSectionText()}</Text>
        <Button
          text={getButtonText()}
          customStyle={{
            backgroundColor: getButtonBackgroundColor(),
          }}
          onPress={onPressCheckAnswer}
          currentCase={currentCase}
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
    paddingHorizontal: Layout.SV_10,
    backgroundColor: Colors.Primary.REGULARONE,
    paddingTop: Layout.SV_70,
    alignItems: 'center',
  },

  sentenceContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginVertical: Layout.SV_10,
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
    marginTop: Layout.SV_20,
    alignItems: 'center',
  },
  buttonSection: {
    flex: 0.5,
    borderRadius: Layout.SV_10,
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
