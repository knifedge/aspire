/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {memo, useContext} from 'react';
import {Dimensions, FlatList, Pressable, StyleSheet, View} from 'react-native';
import {DebitContext} from '.';
import {
  Card,
  Deactivate,
  Insight,
  Transfer,
  Transfercolored,
} from '../../assets/icons';
import DebitCard from '../../components/Card';
import {Text} from '../../components/Text';
import Toggle from '../../components/Toggle';
import {Colors, IconSize} from '../../constants';
import {ScreenNames} from '../../screenenum';
import {ExpenseSummary} from './ExpenseSummary';
const {height, width} = Dimensions.get('window');

interface ISectionItem {
  id: number;
  icon: () => JSX.Element;
  title: string;
  description: string;
  rightIcon: () => JSX.Element;
}

const CardInfo = () => {
  const {toggleSpendLimit}: any = useContext(DebitContext);

  const SECTIONS: Array<ISectionItem> = [
    {
      id: 1,
      icon: () => <Insight style={{...IconSize.xl}} />,
      title: 'Top-up account',
      description: 'Deposit money to your account to use with card',
      rightIcon: () => <></>,
    },
    {
      id: 2,
      icon: () => <Transfercolored style={{...IconSize.xl}} />,
      title: 'Weekly spending limit',
      description: 'You haven’t set any spending limit on card',
      rightIcon: () => (
        <Toggle
          onToggle={() => {
            toggleSpendLimit();
          }}
        />
      ),
    },
    {
      id: 3,
      icon: () => <Transfer style={{...IconSize.xl}} />,
      title: 'Freeze card',
      description: 'Your debit card is currently active',
      rightIcon: () => <Toggle onToggle={() => {}} />,
    },
    {
      id: 4,
      icon: () => <Card style={{...IconSize.xl}} />,
      title: 'Get a new card',
      description: 'This deactivates your current debit card',
      rightIcon: () => <></>,
    },
    {
      id: 5,
      icon: () => <Deactivate style={{...IconSize.xl}} />,
      title: 'Deactivated cards',
      description: 'Your previously deactivated cards',
      rightIcon: () => <></>,
    },
  ];

  const navigation: any = useNavigation();

  const renderItems = ({item}: {item: ISectionItem}) => (
    <View style={styles.menuWrapper}>
      <Pressable
        onPress={() => {
          if (item.id === 2) {
            navigation.navigate(ScreenNames.LimitSetting, {});
          }
        }}
        style={styles.menuItem}>
        {item.icon()}
        <View style={{marginHorizontal: 16}}>
          <Text size="s" varient="dark">
            {item.title}
          </Text>
          <Text size="xs" varient="grey" style={{marginTop: 8}}>
            {item.description}
          </Text>
        </View>
      </Pressable>
      <View>{item.rightIcon()}</View>
    </View>
  );

  return (
    <View style={styles.scrollContainer}>
      <DebitCard style={{top: '-8%'}} />
      <ExpenseSummary />
      <FlatList
        data={SECTIONS}
        scrollEnabled={false}
        keyExtractor={item => item.title}
        renderItem={renderItems}
      />
    </View>
  );
};

export default memo(CardInfo);

const styles = StyleSheet.create({
  scrollContainer: {
    height,
    width,
    top: '12%',
    backgroundColor: Colors.Light,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 24,
  },
  menuWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuItem: {
    height: 44,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
