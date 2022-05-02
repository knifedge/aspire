/* eslint-disable react-native/no-inline-styles */
import React, {memo, useState} from 'react';
import ViewWrapper from '../../components/ViewWrapper';
import CardInfo from './CardInfo';
import {CardHeader} from './Header';

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
      <CardHeader />
      <DebitContext.Provider
        value={{
          isSpendLimitSet,
          toggleSpendLimit,
        }}>
        <CardInfo />
      </DebitContext.Provider>
    </ViewWrapper>
  );
};

export default memo(CardSetting);
