/* eslint-disable react-native/no-inline-styles */
import React, {memo, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {BorderRadius, Colors, Spacing} from '../../constants';
import CardInfo from './CardInfo';
import {CardHeader} from './Header';
const {height, width} = Dimensions.get('window');

interface IDebitToggles {
  isSpendLimitSet: boolean;
  toggleSpendLimit?: () => void;
}

export const DebitContext = React.createContext<IDebitToggles | null>({
  isSpendLimitSet: false,
});

const CardSetting = () => {
  const [isSpendLimitSet, toggleLimit] = useState(false);

  function toggleSpendLimit() {
    toggleLimit(!isSpendLimitSet);
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <CardHeader />
      <DebitContext.Provider
        value={{
          isSpendLimitSet,
          toggleSpendLimit,
        }}>
        <CardInfo />
      </DebitContext.Provider>
    </SafeAreaView>
  );
};

export default memo(CardSetting);

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
