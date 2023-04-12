import { createGlobalStyle } from "styled-components";

import OswaldBold from "../../fonts/Oswald-Bold.woff";
import OswaldBold2 from "../../fonts/Oswald-Bold.woff2";
import OswaldExtraLight from "../../fonts/Oswald-ExtraLight.woff";
import OswaldExtraLight2 from "../../fonts/Oswald-ExtraLight.woff2";
import OswaldLight from "../../fonts/Oswald-Light.woff";
import OswaldLight2 from "../../fonts/Oswald-Light.woff2";
import OswaldMedium from "../../fonts/Oswald-Medium.woff";
import OswaldMedium2 from "../../fonts/Oswald-Medium.woff2";
import OswaldRegular from "../../fonts/Oswald-Regular.woff";
import OswaldRegular2 from "../../fonts/Oswald-Regular.woff2";
import OswaldSemiBold from "../../fonts/Oswald-SemiBold.woff";
import OswaldSemiBold2 from "../../fonts/Oswald-SemiBold.woff2";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'OSB';
  src: url(${OswaldBold2}) format('woff2'),
       url(${OswaldBold}) format('woff');
    font-display: fallback;
}
@font-face {
    font-family: 'OSEX';
    src: url(${OswaldExtraLight2}) format('woff2'),
         url(${OswaldExtraLight}) format('woff');
    font-display: fallback;
}
@font-face {
    font-family: 'OSL';
    src: url(${OswaldLight2}) format('woff2'),
         url(${OswaldLight}) format('woff');
    font-display: fallback;
}
@font-face {
    font-family: 'OSM';
    src: url(${OswaldMedium2}) format('woff2'),
         url(${OswaldMedium}) format('woff');
    font-display: fallback;
}
@font-face {
    font-family: 'OSR';
    src: url(${OswaldRegular2}) format('woff2'),
         url(${OswaldRegular}) format('woff');
    font-display: fallback;
}
@font-face {
    font-family: 'OSSB';
    src: url(${OswaldSemiBold2}) format('woff2'),
         url(${OswaldSemiBold}) format('woff');
    font-display: fallback;
}
`;

export default FontStyles;