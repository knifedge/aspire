/* eslint-disable react-native/no-inline-styles */
import React, {memo, useState} from 'react';
import {Dimensions, ScrollView} from 'react-native';
import ViewWrapper from '../../components/ViewWrapper';
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
    <ViewWrapper>
      <ScrollView>
        <CardHeader />
        <DebitContext.Provider
          value={{
            isSpendLimitSet,
            toggleSpendLimit,
          }}>
          <CardInfo />
        </DebitContext.Provider>
      </ScrollView>
    </ViewWrapper>
  );
};

export default memo(CardSetting);
