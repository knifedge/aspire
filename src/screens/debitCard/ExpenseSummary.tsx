import useAxios from 'axios-hooks';
import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {DebitContext} from '.';
import {AppContext} from '../../../App';
import {Text} from '../../components/Text';
import {BorderRadius, Colors, Spacing} from '../../constants';
import {Endpoint} from '../../services/endpoint';

export const ExpenseSummary = () => {
  const [{data, loading, error}] = useAxios(Endpoint.spendLimit);
  const {isSpendLimitSet}: any = useContext(DebitContext);
  const {debitSpendLimit} = useContext(AppContext);

  useEffect(() => {}, [data]);

  if (!isSpendLimitSet || loading || error) {
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
