import * as React from "react";
import { SvgXml } from "react-native-svg";

export default function Notifications(){  
  const svgcode = 
  `
  
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0361 2H11.9648C8.59565 2 5.50654 4.44456 5.20685 7.68096C5.18686 7.91248 5.17324 8.14906 5.16444 8.40391L5.15213 8.99974L5.14969 9.53395L5.16473 9.47306C5.02569 10.151 4.70525 10.7799 4.23653 11.2938L4.16936 11.3802C3.76804 11.9898 3.53744 12.6955 3.50175 13.4242L3.5009 13.6624C3.48041 14.6208 3.80882 15.5691 4.42663 16.3223C5.26444 17.2069 6.34896 17.7346 7.51296 17.8466C10.49 18.1699 13.502 18.1699 16.4873 17.8457C17.6434 17.7393 18.7311 17.2101 19.5338 16.3582C20.1399 15.6331 20.4707 14.763 20.499 13.862L20.5 13.4587C20.4668 12.698 20.2348 11.9917 19.8286 11.3847L19.7669 11.3055L19.6162 11.1282C19.2776 10.7052 19.0303 10.218 18.8896 9.69688L18.845 9.50977L18.8358 9.31353C18.833 9.22527 18.8317 9.1274 18.8312 9.00516L18.8311 8.33206C18.8288 8.07458 18.8212 7.89148 18.8034 7.68536C18.4934 4.44285 15.4034 2 12.0361 2ZM11.9648 3.39535H12.0361C14.7336 3.39535 17.1944 5.34075 17.4307 7.81326C17.4447 7.97558 17.4509 8.13044 17.4528 8.3605L17.4555 9.26514C17.4585 9.40982 17.4642 9.53013 17.4739 9.66551L17.4868 9.75818L17.5517 10.034C17.744 10.7635 18.0893 11.4441 18.5647 12.0309L18.7026 12.1926L18.6873 12.1672C18.951 12.5613 19.1013 13.0186 19.1223 13.4901L19.1216 13.6536C19.1375 14.3097 18.9199 14.933 18.5084 15.4267C17.9645 16.002 17.1871 16.3802 16.3514 16.4572C13.4527 16.7719 10.5393 16.7719 7.65168 16.4583C6.80682 16.377 6.02881 15.9985 5.45369 15.3931C5.08086 14.9356 4.86568 14.3142 4.87919 13.6774L4.87935 13.4587L4.89682 13.2682C4.9389 12.9495 5.04539 12.6265 5.21045 12.3291L5.29415 12.1905C5.90779 11.5004 6.32892 10.6611 6.51441 9.75667L6.52879 9.61486L6.53532 8.69559L6.55137 8.2292C6.55866 8.08207 6.56798 7.94228 6.57967 7.80678C6.80804 5.34087 9.26651 3.39535 11.9648 3.39535ZM5.29415 12.1905C5.27931 12.2072 5.26436 12.2238 5.24929 12.2404L5.29856 12.1833L5.29415 12.1905ZM14.608 19.6906C14.3114 19.4491 13.8775 19.4967 13.6389 19.7969C13.5355 19.927 13.4158 20.0437 13.2826 20.1443C12.8307 20.4986 12.2669 20.6564 11.7064 20.5896C11.1467 20.523 10.6379 20.2381 10.2927 19.7995C10.0555 19.4981 9.62189 19.4484 9.32417 19.6885C9.02646 19.9286 8.9774 20.3676 9.21459 20.6689C9.787 21.3962 10.6258 21.8659 11.5453 21.9754C12.464 22.0849 13.3891 21.826 14.1167 21.255C14.3327 21.0922 14.5366 20.8935 14.7129 20.6715C14.9515 20.3713 14.9045 19.9321 14.608 19.6906Z" fill="#1F2937"/>
  </svg>
  
  `;
  const Svg = () => <SvgXml xml={svgcode} width="32px" height="32px" />;  

  return <Svg />;
}