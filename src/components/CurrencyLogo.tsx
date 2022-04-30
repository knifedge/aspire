import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {BorderRadius, Colors} from '../constants';
import {Text} from './Text';

export const CurrencyLogo = ({style}: {style?: ViewStyle}) => (
  <View style={[styles.balanceContainer, {...style}]}>
    <Text>$$</Text>
  </View>
);

const styles = StyleSheet.create({
  balanceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Secondary,
    height: 22,
    width: 40,
    borderRadius: BorderRadius.xs,
    marginRight: 10,
  },
});
