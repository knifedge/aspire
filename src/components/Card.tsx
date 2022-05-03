/* eslint-disable react-native/no-inline-styles */
import React, {memo, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {Aspire, Eye, Hide, Visa} from '../assets/icons';
import {BorderRadius, Colors, IconSize, Spacing} from '../constants';
import Dot from './Dot';
import {Text} from './Text';
const {width} = Dimensions.get('window');
const CARD_NAME = 'Mark Henry';

const CardNumber = ({showCardNumber}: {showCardNumber: boolean}) => {
  const renderItems = ({item, index}: {item: number; index: number}) => {
    if (index === 3) {
      return (
        <View style={{flexDirection: 'row', marginRight: 8}}>
          <Text>2020</Text>
        </View>
      );
    }
    return (
      <View style={{flexDirection: 'row', marginRight: 8}}>
        {Array.from({length: 4}, (v, i) => i).map((value: any) => (
          <Dot key={value} />
        ))}
      </View>
    );
  };

  if (!showCardNumber) {
    return (
      <View style={styles.cardNumber}>
        <FlatList
          data={Array.from({length: 4}, (v, i) => i)}
          horizontal
          keyExtractor={item => item.toString()}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={renderItems}
        />
      </View>
    );
  }

  return (
    <View style={styles.cardNumber}>
      <FlatList
        data={[5647, 3411, 2413, 2020]}
        horizontal
        keyExtractor={item => item.toString()}
        renderItem={({item}: {item: number}) => (
          <Text size="s" style={{marginRight: Spacing.m}}>
            {item}
          </Text>
        )}
      />
    </View>
  );
};

const Card = ({style}: {style: ViewStyle}) => {
  const [showCardNumber, toggleCardNumberVisiblity] = useState(false);

  return (
    <View style={style}>
      <View style={[styles.container]}>
        <Aspire style={styles.aspireLogo} />
        <Text size="l" weight="bold">
          {CARD_NAME}
        </Text>
        <CardNumber showCardNumber={showCardNumber} />
        <View style={styles.expiry}>
          <Text>Thru: 12/20</Text>
          <Text style={{marginHorizontal: Spacing.s}}>CVV: 456</Text>
        </View>
        <Visa style={styles.visaLogo} />
      </View>
      <Pressable
        onPress={() => {
          toggleCardNumberVisiblity(!showCardNumber);
        }}
        style={styles.stickyToggle}>
        {showCardNumber ? (
          <Hide style={{...IconSize.s}} />
        ) : (
          <Eye style={{...IconSize.s}} />
        )}
        <Text varient="secondary">
          {showCardNumber ? 'Hide' : 'Show'} card number
        </Text>
      </Pressable>
    </View>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  visaLogo: {
    width: 59,
    height: 20,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: Spacing.l,
    right: Spacing.l,
  },
  aspireLogo: {alignSelf: 'flex-end', width: 74, height: 21},
  cardNumber: {
    flexDirection: 'row',
    width: 250,
    justifyContent: 'space-between',
    marginTop: Spacing.xl,
    marginBottom: Spacing.l,
  },
  stickyToggle: {
    height: 44,
    width: 160,
    borderTopLeftRadius: BorderRadius.m,
    borderTopRightRadius: BorderRadius.m,
    backgroundColor: Colors.Light,
    position: 'absolute',
    right: Spacing.s,
    top: -35,
    zIndex: -1,
    paddingHorizontal: Spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  expiry: {
    flexDirection: 'row',
    width: 130,
    justifyContent: 'space-between',
  },

  container: {
    height: 220,
    width: width / 1.15,
    backgroundColor: Colors.Secondary,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: BorderRadius.m,
    shadowOpacity: 0.6,
    shadowRadius: 24,
    elevation: 8,
    padding: Spacing.l,
  },
});
