/* eslint-disable react-native/no-inline-styles */
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
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {initialState} from './src/initialState';
import RegisteredScreens from './src/navigation';
import {createAxiosInstance} from './src/services/request';
import {useUser} from './src/services/user';

export const AppContext: any = createContext(initialState);
createAxiosInstance();

const App = () => {
  const [debitSpendLimit, setDebitSpendLimit] = useState(345);
  const {data} = useUser();

  return (
    <NavigationContainer>
      <AppContext.Provider
        value={{
          debitSpendLimit,
          user: data,
          setDebitSpendLimit,
        }}>
        <GestureHandlerRootView style={{flex: 1}}>
          <RegisteredScreens />
        </GestureHandlerRootView>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;
