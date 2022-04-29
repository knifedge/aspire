import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";

const SvgLogo = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.595 25" {...props}>
    <Path
      d="M25.073 15.759c0 .071 0 .142-.073.142a.159.159 0 0 1-.147-.142c-.22-.284-11.388-12.08-11.9-12.506-.22-.213-.294-.142-.514.071C12.363 3.395.754 15.617.607 15.83c-.073.07-.147.07-.147-.071a11.641 11.641 0 0 1-.441-3.908 11.032 11.032 0 0 1 1.616-5.4A12.217 12.217 0 0 1 10.011.339a12.62 12.62 0 0 1 11.977 3.482 11.636 11.636 0 0 1 3.453 6.68 9.408 9.408 0 0 1 .147 2.061 16.11 16.11 0 0 1-.515 3.197Z"
      style={{
        fill: "#01d167",
      }}
    />
    <Path
      d="M.085 9.717c-.073-.071-.147-.142 0-.284S8.828.266 9.048.053c.073-.071.147-.071.147 0 .294.355 8.743 9.309 8.964 9.451.073.071.073.142-.073.142A9.965 9.965 0 0 1 16.469 11a12.563 12.563 0 0 1-6.319 2.274 6.53 6.53 0 0 1-1.176.071A12.7 12.7 0 0 1 .085 9.717Z"
      transform="translate(3.682 11.656)"
      style={{
        fill: "#01d167",
      }}
    />
  </Svg>
);

const Memo = memo(SvgLogo);
export default Memo;
