import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {DebitContext} from '.';
import {AppContext} from '../../../App';
import {Text} from '../../components/Text';
import {BorderRadius, Colors, Spacing} from '../../constants';

export const ExpenseSummary = () => {
  const {isSpendLimitSet}: any = useContext(DebitContext);
  const {debitSpendLimit} = useContext(AppContext);

  if (!isSpendLimitSet) {
    return <></>;
  }
  return (
    <View style={{top: -Spacing.xl}}>
      <View style={styles.header}>
        <Text varient="dark">Debit card spending limit</Text>
        <Text varient="secondary">
          ${debitSpendLimit} <Text varient="grey">| $5,000</Text>{' '}
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressContainer: {
    marginTop: Spacing.m,
    height: 15,
    backgroundColor: Colors.Grey,
    borderRadius: BorderRadius.m,
    overflow: 'hidden',
  },
  progress: {
    width: '23%',
    height: 15,
    position: 'absolute',
    backgroundColor: Colors.Secondary,
  },
});
