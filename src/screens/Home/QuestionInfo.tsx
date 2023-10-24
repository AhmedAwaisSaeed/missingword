import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import {questionType} from '../../types';
import {Colors, Layout} from '../../theme';
import {CustomTextInput, Button} from '../../components';
type questionProps = {
  item: questionType;
  handleNextButton: (answer: string) => void;
  active: boolean;
};

const QuestionInfo = ({
  item,
  active,
  handleNextButton,
}: questionProps): JSX.Element => {
  const [answer, setAnswer] = useState('');
  const {question, prompt} = item;
  const textColor = active ? Colors.Primary.GREEN : Colors.Primary.BLACK;
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyle, {color: textColor}]}>{question}</Text>
      <CustomTextInput
        placeholder={prompt}
        onChangeText={setAnswer}
        value={answer}
        editable={active}
      />
      <Button
        text={'Next'}
        onPress={() => handleNextButton(answer)}
        disable={!active}
      />
    </View>
  );
};

export default QuestionInfo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Primary.REGULARONE,
    margin: Layout.SV_10,
  },
  textStyle: {
    fontSize: Layout.SV_15,
  },
});
