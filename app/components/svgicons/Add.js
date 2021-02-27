import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function Home(){  
  const svgcode = 
  `

  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6857 1H6.31429C3.04762 1 1 3.31208 1 6.58516V15.4148C1 18.6879 3.0381 21 6.31429 21H15.6857C18.9619 21 21 18.6879 21 15.4148V6.58516C21 3.31208 18.9619 1 15.6857 1Z" fill="#7C3AED" stroke="#7C3AED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.0001 7.32731V14.6537" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14.6666 10.9905H7.33325" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  `;
  const Svg = () => <SvgXml xml={svgcode} width="50px" height="50px" />;  

  return <Svg />;
}