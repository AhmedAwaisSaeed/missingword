import {StyleSheet, FlatList} from 'react-native';
import React from 'react';

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
      extraData={answer}
    />
  );
};

export default OptionList;
