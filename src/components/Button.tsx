import React from 'react';
import {ButtonProps, Pressable, StyleSheet} from 'react-native';
import {BorderRadius, Colors, Spacing} from '../constants';
import {Text} from './Text';

export const Button = ({title, disabled, ...props}: ButtonProps) => (
  <Pressable
    {...props}
    disabled={disabled}
    style={[
      styles.container,
      {backgroundColor: disabled ? Colors.Grey : Colors.Secondary},
    ]}>
    <Text size="l">{title}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 220,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: BorderRadius.s,
    alignSelf: 'center',
    position: 'absolute',
    bottom: Spacing.l,
  },
});
