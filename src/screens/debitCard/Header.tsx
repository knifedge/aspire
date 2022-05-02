/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {CurrencyLogo} from '../../components/CurrencyLogo';
import {Header} from '../../components/Header';
import {Text} from '../../components/Text';
import {BorderRadius, Colors, Spacing} from '../../constants';
import {useBalance} from '../../services/user';
const {height, width} = Dimensions.get('window');

export const CardHeader = () => {
  let {data, loading} = useBalance();
  //call balance hook
  return (
    <View style={{padding: Spacing.l}}>
      <Header title={'Debit Card'} />
      <Text style={styles.balanceDescription}>Available balance</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CurrencyLogo />
        <Text weight="bold" size="l" varient="light">
          {loading ? 'Loading ....' : Math.round(data.balance)}
        </Text>
      </View>
    </View>
  );
};

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
