import React, {memo, useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Colors} from '../constants';

const Toggle = ({onToggle}: {onToggle?: () => void}) => {
  const [isOn, setToggle] = useState(false);

  let style = !isOn ? {left: 2} : {right: 2};

  function handleToggle() {
    setToggle(!isOn);
    onToggle?.();
  }

  return (
    <Pressable
      onPress={handleToggle}
      style={[
        styles.container,
        {backgroundColor: isOn ? Colors.Secondary : Colors.Grey},
      ]}>
      <View style={[styles.statButton, {...style}]} />
    </Pressable>
  );
};

export default memo(Toggle);

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 34,

    borderRadius: 50,
    justifyContent: 'center',
  },
  statButton: {
    height: 16,
    backgroundColor: Colors.Light,
    borderRadius: 50,
    width: 16,
    position: 'absolute',
  },
});
