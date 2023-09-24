import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, Layout, Fonts} from '../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setCurrentOption} from '../../reducers/exerciseSlice';
import {optionType} from '../../types';
type optionProps = {
  option: optionType;
  index: number;
  answer: boolean | undefined;
};

const OptionInfo = ({option, answer}: optionProps): JSX.Element => {
  const {currentOption} = useSelector((state: RootState) => state.exercise);
  const dispatch = useDispatch();
  const onPressOption = () => {
    dispatch(setCurrentOption(option));
  };

  const selectedOption =
    currentOption && currentOption.id === option.id ? true : false;

  const getButtonBackgroundColor = () => {
    if (selectedOption) {
      return Colors.Primary.REGULARTWO;
    } else if (!selectedOption && answer !== undefined) {
      return Colors.Primary.DISABLE;
    } else {
      return Colors.Primary.WHITE;
    }
  };

  const getTextBackgroundColor = () => {
    if (selectedOption) {
      return Colors.Primary.REGULARTWO;
    } else if (!selectedOption && answer !== undefined) {
      return Colors.Primary.DISABLETEXT;
    } else {
      return Colors.Primary.BLACK;
    }
  };

  const ContainerComponent: any =
    answer !== undefined ? View : TouchableOpacity;

  return (
    <ContainerComponent
      style={[
        styles.container,
        {
          backgroundColor: getButtonBackgroundColor(),
        },
      ]}
      onPress={onPressOption}>
      <Text
        style={[
          styles.textStyle,
          {
            color: getTextBackgroundColor(),
          },
        ]}>
        {option.option}
      </Text>
    </ContainerComponent>
  );
};

export default OptionInfo;

const styles = StyleSheet.create({
  container: {
    padding: Layout.SV_10,
    backgroundColor: Colors.Primary.WHITE,
    borderRadius: Layout.SV_10,
    margin: Layout.SV_10,
  },
  textStyle: {
    fontSize: Layout.FSV_12,
    fontFamily: Fonts.medium,
  },
});
