import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgPay = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18.075" {...props}>
    <Path
      d="M23.5 213.333H.5a.474.474 0 0 0-.5.5v7.053a2.485 2.485 0 0 0 2.5 2.519h19a2.485 2.485 0 0 0 2.5-2.519v-7.053a.474.474 0 0 0-.5-.5Zm-20 4.03h4a.5.5 0 0 1 0 1.008h-4a.5.5 0 0 1 0-1.008Zm7 3.023h-7a.5.5 0 0 1 0-1.008h7a.5.5 0 0 1 0 1.008Zm8.5 0a1.68 1.68 0 0 1-1-.3 1.68 1.68 0 0 1-1 .3 2.015 2.015 0 0 1 0-4.03 1.68 1.68 0 0 1 1 .3 1.68 1.68 0 0 1 1-.3 2.015 2.015 0 0 1 0 4.03Z"
      transform="translate(0 -205.333)"
      style={{
        fill: '#01d167',
      }}
    />
    <Path
      d="M21.5 85.333h-19c-1.4 0-2.5 1.378-2.5 3.132v1.253c0 .376.2.626.5.626h23c.3 0 .5-.251.5-.626v-1.253c0-1.754-1.1-3.132-2.5-3.132Z"
      transform="translate(0 -85.333)"
      style={{
        fill: '#01d167',
      }}
    />
  </Svg>
);

const Memo = memo(SvgPay);
export default Memo;
