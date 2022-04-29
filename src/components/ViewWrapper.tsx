import React from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from '../constants';
const {height, width} = Dimensions.get('window');

const ViewWrapper = ({children}: {children: React.ReactNode}) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

export default ViewWrapper;

const styles = StyleSheet.create({
  wrapper: {
    height,
    width,
    backgroundColor: Colors.Primary,
  },
});
