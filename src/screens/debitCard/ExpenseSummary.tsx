import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DebitContext} from '.';
import {AppContext} from '../../../App';
import {Text} from '../../components/Text';
import {BorderRadius, Colors, MAX_LIMIT, Spacing} from '../../constants';
import {useSpend} from '../../services/user';

export const ExpenseSummary = () => {
  const [progress, setProgress] = useState<number>(0);
  const {isSpendLimitSet}: any = useContext(DebitContext);
  const {debitSpendLimit, setDebitSpendLimit} = useContext(AppContext);
  const {data} = useSpend();

  useEffect(() => {
    setProgress((Math.round(debitSpendLimit) / MAX_LIMIT) * 100);
  }, [debitSpendLimit]);

  useEffect(() => {
    setDebitSpendLimit(data?.limit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!isSpendLimitSet) {
    return <></>;
  }

  return (
    <View style={{top: -Spacing.xl}}>
      <View style={styles.header}>
        <Text varient="dark">Debit card spending limit</Text>
        <Text varient="secondary">
          ${Math.round(debitSpendLimit)}{' '}
          <Text varient="grey">| ${MAX_LIMIT}</Text>
        </Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.progress, {width: `${progress}%`}]} />
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
    height: 15,
    position: 'absolute',
    backgroundColor: Colors.Secondary,
  },
});
