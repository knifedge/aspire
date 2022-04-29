/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Text} from '../../components/Text';
import {BorderRadius, Colors, Spacing} from '../../constants';
const {height, width} = Dimensions.get('window');

const BALANCE = 3000;
export const CardHeader = () => (
  <View style={{padding: Spacing.l}}>
    <View>
      <Text size="l" weight="bold" varient="light">
        Debit Card
      </Text>
    </View>

    <Text style={styles.balanceDescription}>Available balance</Text>
    <View style={{flexDirection: 'row'}}>
      <View style={styles.balanceContainer}>
        <Text>$$</Text>
      </View>
      <Text weight="bold" size="l" varient="light">
        {BALANCE}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  balanceDescription: {marginTop: Spacing.l, marginBottom: Spacing.l / 2},
  wrapper: {height, width, backgroundColor: Colors.Primary},
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
