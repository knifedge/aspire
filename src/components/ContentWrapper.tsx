import React, {useEffect} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {BorderRadius, Colors} from '../constants';

const {height, width} = Dimensions.get('window');

const ContentWrapper = ({children}: {children: React.ReactNode}) => {
  let traslateY = useSharedValue(0);
  const context = useSharedValue({y: 0});

  let gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: traslateY.value};
    })
    .onUpdate(event => {
      traslateY.value = event.translationY + context.value.y;
      traslateY.value = Math.max(traslateY.value, -height + 70);
    });

  useEffect(() => {
    traslateY.value = withTiming(-height / 1.5, {duration: 500});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: traslateY.value}],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.scrollContainer, rStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

export default ContentWrapper;

const styles = StyleSheet.create({
  scrollContainer: {
    height,
    width,
    backgroundColor: Colors.Light,
    borderTopLeftRadius: BorderRadius.m,
    borderTopRightRadius: BorderRadius.m,
    padding: 24,
    top: height,
    position: 'absolute',
  },
});
