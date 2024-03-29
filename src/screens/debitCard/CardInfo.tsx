/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {memo, useState} from 'react';
import {Dimensions, FlatList, Pressable, StyleSheet, View} from 'react-native';
import {
  Card,
  Deactivate,
  Insight,
  Transfer,
  Transfercolored,
} from '../../assets/icons';
import DebitCard from '../../components/Card';
import ContentWrapper from '../../components/ContentWrapper';
import {Text} from '../../components/Text';
import Toggle from '../../components/Toggle';
import {Colors, IconSize, Spacing} from '../../constants';
import {ScreenNames} from '../../screenEnum';
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
  const [toggleSpendProgress, setToggleSpendProgress] = useState(true);

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
          on={toggleSpendProgress}
          onToggle={() => {
            setToggleSpendProgress(!toggleSpendProgress);
          }}
        />
      ),
    },
    {
      id: 3,
      icon: () => <Transfer style={{...IconSize.xl}} />,
      title: 'Freeze card',
      description: 'Your debit card is currently active',
      rightIcon: () => <Toggle on={false} onToggle={() => {}} />,
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
        <View style={{marginHorizontal: Spacing.l}}>
          <Text size="s" varient="dark">
            {item.title}
          </Text>
          <Text
            numberOfLines={2}
            size="xs"
            varient="grey"
            style={{marginTop: Spacing.xs, maxWidth: 230}}>
            {item.description}
          </Text>
        </View>
      </Pressable>
      <View>{item.rightIcon()}</View>
    </View>
  );

  return (
    <ContentWrapper>
      <DebitCard style={{top: '-8%'}} />
      <ExpenseSummary visible={toggleSpendProgress} />
      <FlatList
        data={SECTIONS}
        scrollEnabled={false}
        keyExtractor={item => item.title}
        renderItem={renderItems}
      />
    </ContentWrapper>
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
    height: 50,
    marginVertical: Spacing.m,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
