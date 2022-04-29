import * as React from 'react';
import {memo} from 'react';
import Svg, {Circle, G, Path, SvgProps} from 'react-native-svg';

const SvgCard = (props: SvgProps) => (
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
        d="M387.881 300.224h-.79v-.79a.766.766 0 1 0-1.532 0v.79h-.79a.766.766 0 0 0 0 1.532h.79v.79a.766.766 0 0 0 1.532 0v-.79h.79a.766.766 0 0 0 0-1.532Z"
        transform="translate(-576.6 24.064)"
        style={{
          fill: '#f1f3f4',
        }}
      />
      <Path
        d="M15.491 87.852a2.407 2.407 0 0 0-2.281-2.517H2.281A2.407 2.407 0 0 0 0 87.852a.2.2 0 0 0 .187.207H15.3a.2.2 0 0 0 .191-.207Z"
        transform="translate(-205 229.666)"
        style={{
          fill: '#9ac0fa',
        }}
      />
      <Path
        d="M15.491 202.208v.936a.415.415 0 0 1-.424.436 4.1 4.1 0 0 0-4.138 4.567.422.422 0 0 1-.4.468H2.281A2.407 2.407 0 0 1 0 206.1v-3.89a.2.2 0 0 1 .187-.21H15.3a.2.2 0 0 1 .191.208Z"
        transform="translate(-205 117.205)"
        style={{
          fill: '#9ac0fa',
        }}
      />
    </G>
  </Svg>
);

const Memo = memo(SvgCard);
export default Memo;
