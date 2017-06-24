import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import Logo from '../components/Logo/Logo';
import InputWithButton from '../components/TextInput/InputWithButton';
import ClearButton from '../components/Buttons/ClearButton';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  handlePressBaseCurrency() {
    console.log('Pressed base currency');
  }

  handlePressQuoteCurrency() {
    console.log('Pressed quote currency');
  }

  handleTextChange = (text) => {
    console.log('change text', text);
  };

  handleSwapCurrency = () => {
    console.log('Pressed swapped currency');
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleTextChange}
        />
        <InputWithButton
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          editable={false}
          defaultValue={TEMP_QUOTE_PRICE}
        />
        <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
      </Container>
    );
  }
}

export default Home;
