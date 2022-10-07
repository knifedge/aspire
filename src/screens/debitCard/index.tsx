/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
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
  return (
    <ViewWrapper>
      <CardHeader />
      <CardInfo />
    </ViewWrapper>
  );
};

export default memo(CardSetting);
