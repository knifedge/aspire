/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useState} from 'react';
import {initialState} from './src/initialState';
import RegisteredScreens from './src/navigation';

export const AppContext: any = createContext(initialState);

const App = () => {
  const [debitSpendLimit, setDebitSpendLimit] = useState(345);
  return (
    <NavigationContainer>
      <AppContext.Provider
        value={{
          debitSpendLimit,
          setDebitSpendLimit,
        }}>
        <RegisteredScreens />
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;
