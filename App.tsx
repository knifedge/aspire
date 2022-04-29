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
import React, {createContext} from 'react';
import {initialState} from './src/initialState';
import Tabs from './src/navigation';

export const AppContext = createContext(initialState);

const App = () => {
  return (
    <NavigationContainer>
      <AppContext.Provider
        value={{
          debitSpendLimit: 345,
        }}>
        <Tabs />
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default App;
