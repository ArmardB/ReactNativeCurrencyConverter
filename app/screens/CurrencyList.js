import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';

import ListItem from '../components/List/ListItem';
import Seperator from '../components/List/Seperator';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  handlePress = () => {
    console.log('row pressed');
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Seperator}
        />
      </View>
    );
  }
}

export default CurrencyList;
