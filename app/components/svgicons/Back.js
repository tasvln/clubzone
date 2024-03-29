import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function Back(){  
  const svgcode = 
  `

  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 19L8.5 12L15.5 5" stroke="#200E32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  `;
  const Svg = () => <SvgXml xml={svgcode} width="32px" height="32px" />;  

  return <Svg />;
}