import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Text} from '../../components/Text';
import {BorderRadius, Colors, Spacing} from '../../constants';

export const ExpenseSummary = ({visible = true}: {visible: boolean}) => {
  const {user} = useSelector((state: any) => state.globalReducer);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress((Math.round(user.spendAmount) / user.spendLimit) * 100);
  }, [user.spendLimit, user.spendAmount]);

  if (!visible) {
    return <></>;
  }

  return (
    <View style={{top: -Spacing.xl}}>
      <View style={styles.header}>
        <Text varient="dark">Debit card spending limit</Text>
        <Text varient="secondary">
          ${user.spendAmount ? user.spendAmount : 0} &nbsp;
          <Text varient="grey">| ${user.spendLimit}</Text>
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
