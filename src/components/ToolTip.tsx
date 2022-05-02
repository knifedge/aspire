import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {BorderRadius, Colors, Spacing} from '../constants';
import {Text} from './Text';

let {width} = Dimensions.get('window');

export default function ToolTip() {
  return (
    <View style={styles.container}>
      <Text>You have exceded the max limit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Spacing.l,
    borderRadius: BorderRadius.m,
    position: 'absolute',
    bottom: Spacing.m,
    alignSelf: 'center',
    width: width - Spacing.l,
    backgroundColor: Colors.Primary,
  },
});
