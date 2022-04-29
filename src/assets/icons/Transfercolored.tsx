import * as React from 'react';
import {memo} from 'react';
import Svg, {Circle, G, Path, SvgProps} from 'react-native-svg';

const SvgTransfercolored = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <G transform="translate(213 -305)">
      <Circle
        cx={16}
        cy={16}
        r={16}
        transform="translate(-213 305)"
        style={{
          fill: '#325baf',
        }}
      />
      <Path
        d="M40.53 166.985a.219.219 0 0 0-.054-.159l-1.737-1.977a.219.219 0 0 0-.31-.02 9.039 9.039 0 0 0-1.97 2.46.219.219 0 0 0 .087.3l2.309 1.262a.219.219 0 0 0 .3-.087 5.976 5.976 0 0 1 1.3-1.626.219.219 0 0 0 .075-.153Z"
        transform="translate(-241.357 150.364)"
        style={{
          fill: '#9ac0fa',
          stroke: '#325baf',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '.25px',
        }}
      />
      <Path
        d="M160.092 96.836a.219.219 0 0 0 .3.091 5.905 5.905 0 0 1 1.979-.637.219.219 0 0 0 .188-.247l-.354-2.608a.22.22 0 0 0-.247-.188 8.964 8.964 0 0 0-3 .967.219.219 0 0 0-.091.3Z"
        transform="translate(-360.166 219.793)"
        style={{
          fill: '#9ac0fa',
          stroke: '#325baf',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '.25px',
        }}
      />
      <Path
        d="m3.123 311.445-2.54-.689a.219.219 0 0 0-.269.154A9.059 9.059 0 0 0 0 313.281c0 .138 0 .275.01.422a.219.219 0 0 0 .219.209h.01l2.629-.121a.219.219 0 0 0 .209-.229c0-.1-.007-.19-.007-.28a5.986 5.986 0 0 1 .208-1.567.219.219 0 0 0-.155-.27Z"
        transform="translate(-206 8.679)"
        style={{
          fill: '#9ac0fa',
          stroke: '#325baf',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '.25px',
        }}
      />
      <Path
        d="M322.6 92.773a8.969 8.969 0 0 0-3.039-.85.219.219 0 0 0-.239.2l-.254 2.619a.219.219 0 0 0 .2.239 5.908 5.908 0 0 1 2 .56.219.219 0 0 0 .293-.1l1.143-2.371a.219.219 0 0 0-.104-.297Z"
        transform="translate(-515.693 221.078)"
        style={{
          fill: '#9ac0fa',
          stroke: '#325baf',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '.25px',
        }}
      />
      <Path
        d="M434.723 159.96a.219.219 0 0 0-.024-.166 9.042 9.042 0 0 0-2.062-2.382.219.219 0 0 0-.308.032l-1.661 2.042a.219.219 0 0 0 .032.309 5.978 5.978 0 0 1 1.364 1.576.219.219 0 0 0 .3.076l2.259-1.35a.22.22 0 0 0 .1-.137Z"
        transform="translate(-623.973 157.559)"
        style={{
          fill: '#9ac0fa',
          stroke: '#325baf',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '.25px',
        }}
      />
      <Path
        d="M501.419 299.883a.219.219 0 0 0-.275-.144l-2.511.787a.219.219 0 0 0-.144.275 5.968 5.968 0 0 1 .272 1.786c0 .09 0 .181-.007.28a.219.219 0 0 0 .209.229l2.629.121h.01a.219.219 0 0 0 .219-.209c.007-.146.01-.284.01-.422a9.035 9.035 0 0 0-.412-2.703Z"
        transform="translate(-689.831 19.374)"
        style={{
          fill: '#9ac0fa',
          stroke: '#325baf',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '.25px',
        }}
      />
      <Path
        d="M173.745 310.747h-.113l-3.562-2.1a.226.226 0 0 0-.314.3l1.943 3.642a2.093 2.093 0 0 0-.011.212 2.057 2.057 0 1 0 2.057-2.057Z"
        transform="rotate(10.02 -84.976 -1791.345)"
        style={{
          fill: '#f1f3f4',
        }}
      />
    </G>
  </Svg>
);

const Memo = memo(SvgTransfercolored);
export default Memo;
