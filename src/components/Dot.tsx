import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BorderRadius, Colors, IconSize, Spacing} from '../constants';

const Dot = () => <View style={styles.dot} />;

export default Dot;

const styles = StyleSheet.create({
  dot: {
    ...IconSize.xs,
    borderRadius: BorderRadius.l,
    marginHorizontal: Spacing.xs,
    backgroundColor: Colors.Light,
  },
});
