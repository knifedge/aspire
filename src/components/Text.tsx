import React from 'react';
import {StyleSheet, Text as Txt, TextProps, TextStyle} from 'react-native';
import {Colors, FontSize} from '../constants';

export type TextWeight = 'regular' | 'bold' | 'semi-bold' | 'light';
export type TextVarient = 'primary' | 'secondary' | 'dark' | 'light' | 'grey';
export type TextSize = 'xxs' | 'xs' | 's' | 'l';

interface TxtProps extends TextProps {
  children: any;
  weight?: TextWeight;
  varient?: TextVarient | string;
  size?: TextSize;
  style?: TextStyle | TextStyle[];
}

const getTextWeight = (weight: TextWeight) => {
  switch (weight) {
    case 'regular':
      return {
        ...styles.regular,
      };
    case 'bold':
      return {
        fontWeight: '700',
        ...styles.bold,
      };
    case 'semi-bold':
      return {...styles.semiBold};
    case 'light':
      return {
        fontWeight: '300',
        ...styles.light,
      };
    default:
      return {
        ...styles.regular,
      };
  }
};

const getTextSize = (size: TextSize) => {
  switch (size) {
    case 'xxs':
      return {fontSize: FontSize.xxs};
    case 'xs':
      return {fontSize: FontSize.xs};
    case 's':
      return {fontSize: FontSize.s};
    case 'l':
      return {fontSize: FontSize.l};
    default:
      return {fontSize: FontSize.s};
  }
};

const getTextVarient = (varient: TextVarient) => {
  switch (varient) {
    case 'primary':
      return {color: Colors.Primary};
    case 'secondary':
      return {color: Colors.Secondary};
    case 'dark':
      return {color: Colors.Dark};

    case 'light':
      return {color: Colors.Light};
    case 'grey':
      return {color: Colors.Grey};
    default:
      return {color: Colors.Light};
  }
};

export const Text: React.FC<TxtProps> = ({
  weight = 'regular',
  varient = 'light',
  size = 's',
  ...props
}: TxtProps) => {
  let textStyle: any = {
    ...getTextWeight(weight),
    ...getTextSize(size),
    ...getTextVarient(varient),
  };

  return (
    <Txt {...props} style={[textStyle, {...props.style}]}>
      {props.children}
    </Txt>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  semiBold: {
    fontFamily: 'AvenirNextLTPro-Bold',
  },
  regular: {
    fontFamily: 'Metropolis-Regular',
  },
  light: {
    fontFamily: 'Metropolis-Regular',
  },
});
