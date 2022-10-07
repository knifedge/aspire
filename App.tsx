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
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import RegisteredScreens from './src/navigation';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          <RegisteredScreens />
        </GestureHandlerRootView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
