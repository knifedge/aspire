import React from 'react';
import {Dimensions, Keyboard, Pressable, StyleSheet} from 'react-native';
import {BorderRadius, Colors} from '../constants';

const {height, width} = Dimensions.get('window');

const ContentWrapper = ({children}: {children: React.ReactNode}) => (
  <Pressable
    onPress={() => {
      Keyboard.dismiss();
    }}
    style={styles.scrollContainer}>
    {children}
  </Pressable>
);

export default ContentWrapper;

const styles = StyleSheet.create({
  scrollContainer: {
    height,
    width,
    top: '12%',
    backgroundColor: Colors.Light,
    borderTopLeftRadius: BorderRadius.m,
    borderTopRightRadius: BorderRadius.m,
    padding: 24,
  },
});
