import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgCommerce = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.047 12.375"
    {...props}>
    <Path
      d="M387.881 300.224h-.79v-.79a.766.766 0 1 0-1.532 0v.79h-.79a.766.766 0 0 0 0 1.532h.79v.79a.766.766 0 0 0 1.532 0v-.79h.79a.766.766 0 0 0 0-1.532Z"
      transform="translate(-371.6 -290.937)"
      style={{
        fill: '#f1f3f4',
      }}
    />
    <Path
      d="M15.491 87.852a2.407 2.407 0 0 0-2.281-2.517H2.281A2.407 2.407 0 0 0 0 87.852a.2.2 0 0 0 .187.207H15.3a.2.2 0 0 0 .191-.207Z"
      transform="translate(0 -85.335)"
      style={{
        fill: '#9ac0fa',
      }}
    />
    <Path
      d="M15.491 202.208v.936a.415.415 0 0 1-.424.436 4.1 4.1 0 0 0-4.138 4.567.422.422 0 0 1-.4.468H2.281A2.407 2.407 0 0 1 0 206.1v-3.89a.2.2 0 0 1 .187-.21H15.3a.2.2 0 0 1 .191.208Z"
      transform="translate(0 -197.796)"
      style={{
        fill: '#9ac0fa',
      }}
    />
  </Svg>
);

const Memo = memo(SvgCommerce);
export default Memo;
