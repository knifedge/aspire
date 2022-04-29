import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Credit, Home, Pay, Payments, User} from '../assets/icons';
import {Colors, IconSize} from '../constants';
import {ScreenNames} from '../screenenum';
import CardSetting from '../screens/debitCard';
import LimitSetter from '../screens/limitSetting';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DummyScreen0 = () => <View />;
const DummyScreen1 = () => <View />;
const DummyScreen2 = () => <View />;
const DummyScreen3 = () => <View />;

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.Secondary,
    }}>
    <Tab.Screen
      name={ScreenNames.Home}
      options={{
        tabBarIcon: () => <Home style={{...IconSize.l}} />,
      }}
      component={DummyScreen0}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Pay style={{...IconSize.l}} />,
      }}
      name={ScreenNames.CardSettings}
      component={CardSetting}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Payments style={{...IconSize.l}} />,
      }}
      name={ScreenNames.DummyScreen1}
      component={DummyScreen1}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <Credit style={{...IconSize.l}} />,
      }}
      name={ScreenNames.DummyScreen2}
      component={DummyScreen2}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => <User style={{...IconSize.l}} />,
      }}
      name={ScreenNames.DummyScreen3}
      component={DummyScreen3}
    />
  </Tab.Navigator>
);

const RegisteredScreens = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={ScreenNames.Main}>
    <Stack.Screen name={ScreenNames.Main} component={Tabs} />
    <Stack.Screen name={ScreenNames.LimitSetting} component={LimitSetter} />
  </Stack.Navigator>
);

export default RegisteredScreens;
