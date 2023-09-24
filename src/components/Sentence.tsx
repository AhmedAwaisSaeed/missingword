import {StyleSheet, View, ViewStyle, TextStyle, Text} from 'react-native';
import React from 'react';
import {Layout, Fonts, Colors} from '../theme';
import {wordType, optionType, caseType} from '../types';
import {Underline, Option} from '../components';
type sentenceProps = {
  style: ViewStyle;
  textStyle: TextStyle;
  text?: string;
  words?: wordType[];
  currentOption?: optionType | undefined;

  currentCase: caseType;
};

const Sentence = ({
  style,
  textStyle,
  text,
  words = [],
  currentOption,
  currentCase,
}: sentenceProps): JSX.Element => {
  console.log('sentence is ====');

  const getMissingWordBackGroundColor = () => {
    switch (currentCase) {
      case caseType.RIGHT_ANSWER_CASE:
        return Colors.Primary.SUCCESS;
      case caseType.WRONG_ANSWER_CASE:
        return Colors.Primary.FAILURE;
      default:
        return Colors.Primary.WHITE;
    }
  };

  const getMissingWordColor = () => {
    switch (currentCase) {
      case caseType.RIGHT_ANSWER_CASE:
        return Colors.Primary.WHITE;
      case caseType.WRONG_ANSWER_CASE:
        return Colors.Primary.WHITE;
      default:
        return Colors.Primary.BLACK;
    }
  };

  const renderBreakableWords = () => {
    const alignItems = currentOption ? 'center' : 'flex-end';
    return (
      <View
        style={[
          styles.rowContainer,
          {
            alignItems: alignItems,
          },
        ]}>
        {words.map((currentword: wordType, index: number) => {
          const highlightWordTextStyle = currentword.underline
            ? styles.higlightWordStyle
            : styles.wordsStyle;
          const {word} = currentword;

          if (currentword.underline === true && currentword.word === 'blank') {
            if (!currentOption) {
              return <Underline color={Colors.Primary.WHITE} key={index} />;
            } else {
              return (
                <View key={index}>
                  <Option
                    color={getMissingWordBackGroundColor()}
                    textColor={getMissingWordColor()}
                    option={currentOption}
                  />
                </View>
              );
            }
          } else {
            return (
              <Text key={index} style={highlightWordTextStyle}>
                {word}
              </Text>
            );
          }
        })}
      </View>
    );
  };

  return (
    <View style={style}>
      {words && words.length > 0 ? (
        renderBreakableWords()
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
    </View>
  );
};

export default Sentence;

const styles = StyleSheet.create({
  container: {},
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  wordsStyle: {
    fontSize: Layout.FSV_16,
    fontFamily: Fonts.light,
    margin: Layout.SV_2,
    color: Colors.Primary.GREY,
  },
  higlightWordStyle: {
    fontSize: Layout.FSV_16,
    fontFamily: Fonts.bold,
    margin: Layout.SV_2,
    color: Colors.Primary.GREY,
    textDecorationLine: 'underline',
  },
});
