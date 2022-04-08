import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../../config/colors/colors';

function CustomSearch({dollarSign}) {
  return (
      <View style = {styles.dollarBox}>
        <Text style = {styles.dollarText}>{dollarSign}</Text>

      </View>
  );
}

const styles = StyleSheet.create({
  dollarBox: {
    width: 89,
    height: 22,
    backgroundColor: colors.light,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems:'center',
  },
  dollarText: {
    fontSize: 14,
  }
})

export default CustomSearch;