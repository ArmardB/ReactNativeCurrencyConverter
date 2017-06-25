import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import CurrencyList from './screens/CurrencyList';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFF',
  $border: '#0f0f0f',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
});

export default () => <CurrencyList />;
