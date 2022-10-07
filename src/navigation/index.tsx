import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Credit, Home, Pay, Payments, User} from '../assets/icons';
import {Text} from '../components/Text';
import ViewWrapper from '../components/ViewWrapper';
import {Colors, IconSize} from '../constants';
import {ScreenNames} from '../screenEnum';
import CardSetting from '../screens/debitCard';
import LimitSetter from '../screens/limitSetting';
import Profile from '../screens/Profile';
import {useGetUser} from '../services/user';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PlaceHolder = () => (
  <ViewWrapper>
    <Text weight="bold" size="l" style={{alignSelf: 'center', top: '50%'}}>
      Content Coming Soon
    </Text>
  </ViewWrapper>
);
const DummyScreen0 = () => <PlaceHolder />;
const DummyScreen1 = () => <PlaceHolder />;
const DummyScreen2 = () => <PlaceHolder />;

const Tabs = () => (
  <Tab.Navigator
    initialRouteName={ScreenNames.CardSettings}
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.Secondary,
    }}>
    <Tab.Screen
      name={ScreenNames.Home}
      options={{
        tabBarIcon: ({focused}) => (
          <Home
            fill={focused ? Colors.Secondary : Colors.Grey}
            style={{...IconSize.l}}
          />
        ),
      }}
      component={DummyScreen0}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <Pay
            fill={focused ? Colors.Secondary : Colors.Grey}
            style={{...IconSize.l}}
          />
        ),
      }}
      name={ScreenNames.CardSettings}
      component={CardSetting}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <Payments
            fill={focused ? Colors.Secondary : Colors.Grey}
            style={{...IconSize.l}}
          />
        ),
      }}
      name={ScreenNames.DummyScreen1}
      component={DummyScreen1}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <Credit
            fill={focused ? Colors.Secondary : Colors.Grey}
            style={{...IconSize.l}}
          />
        ),
      }}
      name={ScreenNames.DummyScreen2}
      component={DummyScreen2}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <User
            fill={focused ? Colors.Secondary : Colors.Grey}
            style={{...IconSize.l}}
          />
        ),
      }}
      name={ScreenNames.Profile}
      component={Profile}
    />
  </Tab.Navigator>
);

const RegisteredScreens = () => {
  useGetUser();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ScreenNames.Main}>
      <Stack.Screen name={ScreenNames.Main} component={Tabs} />
      <Stack.Screen name={ScreenNames.LimitSetting} component={LimitSetter} />
    </Stack.Navigator>
  );
};

export default RegisteredScreens;
