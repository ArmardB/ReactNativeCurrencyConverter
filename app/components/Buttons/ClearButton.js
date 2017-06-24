import React, { PropTypes } from 'react';
import { TouchableOpacity, View, Image, Text } from 'react-native';
import styles from './styles';

const ClearButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image source={require('./images/icon.png')} style={styles.icon} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ClearButton;
