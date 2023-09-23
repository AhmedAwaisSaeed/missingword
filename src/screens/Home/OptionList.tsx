import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Colors, Layout, Fonts} from '../../theme';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {setCurrentExercise} from '../../reducers/exerciseSlice';
import {Sentence} from '../../components';
import {optionType} from '../../types';
import OptionInfo from './OptionInfo';
type optionProps = {
  options: optionType[];
  answer: boolean | undefined;
};

const OptionList = ({options, answer}: optionProps): JSX.Element => {
  const _renderOption = ({item, index}: {item: optionType; index: number}) => {
    return (
      <OptionInfo answer={answer} key={index} option={item} index={index} />
    );
  };

  return (
    <FlatList
      scrollEnabled={false}
      numColumns={2}
      data={options}
      renderItem={_renderOption}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default OptionList;

const styles = StyleSheet.create({});
