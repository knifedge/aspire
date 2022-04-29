/* eslint-disable react-native/no-inline-styles */
import React, {memo, useContext} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
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
import {Colors} from '../../constants';
import {ExpenseSummary} from './ExpenseSummary';
const {height, width} = Dimensions.get('window');

interface ISectionItem {
  icon: () => JSX.Element;
  title: string;
  description: string;
  rightIcon: () => JSX.Element;
}

const CardInfo = () => {
  const {toggleSpendLimit} = useContext(DebitContext);

  const SECTIONS: Array<ISectionItem> = [
    {
      icon: () => <Insight style={{height: 32, width: 32}} />,
      title: 'Top-up account',
      description: 'Deposit money to your account to use with card',
      rightIcon: () => <></>,
    },
    {
      icon: () => <Transfercolored style={{height: 32, width: 32}} />,
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
      icon: () => <Transfer style={{height: 32, width: 32}} />,
      title: 'Freeze card',
      description: 'Your debit card is currently active',
      rightIcon: () => <Toggle onToggle={() => {}} />,
    },
    {
      icon: () => <Card style={{height: 32, width: 32}} />,
      title: 'Get a new card',
      description: 'This deactivates your current debit card',
      rightIcon: () => <></>,
    },
    {
      icon: () => <Deactivate style={{height: 32, width: 32}} />,
      title: 'Deactivated cards',
      description: 'Your previously deactivated cards',
      rightIcon: () => <></>,
    },
  ];

  const renderItems = ({item}: {item: ISectionItem}) => (
    <View style={styles.menuWrapper}>
      <View style={styles.menuItem}>
        {item.icon()}
        <View style={{marginHorizontal: 16}}>
          <Text size="s" varient="dark">
            {item.title}
          </Text>
          <Text size="xs" varient="grey" style={{marginTop: 8}}>
            {item.description}
          </Text>
        </View>
      </View>
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
