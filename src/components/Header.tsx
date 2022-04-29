/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../assets/icons';
import {IconSize, Spacing} from '../constants';
import {Text} from './Text';

interface IHeader {
  title: string;
  rightComponent?: JSX.Element;
}
export const Header = ({title, rightComponent}: IHeader) => {
  return (
    <View>
      <View style={styles.navigationContainer}>
        {rightComponent}
        <Logo style={{...IconSize.l, alignSelf: 'flex-end'}} />
      </View>
      <Text size="l" weight="bold" varient="light">
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    marginBottom: Spacing.l,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
