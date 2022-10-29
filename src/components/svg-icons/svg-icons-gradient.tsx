// import { useRef, useEffect } from "react";
// type Props = {
//   icon: JSX.Element;
// };
// const SVGIconsGradient = ({ icon }: Props) => {
//   let SVGPathJSX = <></>;
//   // fill="url('#logo-gradient')"
//   const currentRef = useRef<JSX.Element>(icon);

//   useEffect(() => {
//     const currSVG = document.getElementsByTagName("svg");
//     document.
//     //currentRef.current.setAttribute("fill", "red");
//   }, []);
//   return { icon };
// };

// export default SVGIconsGradient;

// <defs>
// <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
//   <stop offset="0%" stopColor="#43cea2">
//     <animate
//       attributeName="stop-color"
//       values="#7A5FFF; #43cea2; #7A5FFF"
//       dur="4s"
//       repeatCount="indefinite"
//     ></animate>
//   </stop>

//   <stop offset="100%" stopColor="#185a9d">
//     <animate
//       attributeName="stop-color"
//       values="#01FF89; #185a9d; #01FF89"
//       dur="4s"
//       repeatCount="indefinite"
//     ></animate>
//   </stop>
// </linearGradient>
// </defs>
// <title></title>
// {SVGPathJSX}
// </svg>

export const SVGGradient = `<linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
   <stop offset="0%" stopColor="#43cea2">
     <animate
      attributeName="stop-color"
      values="#7A5FFF; #43cea2; #7A5FFF"
      dur="4s"
      repeatCount="indefinite"
    ></animate>
  </stop>

  <stop offset="100%" stopColor="#185a9d">
    <animate
      attributeName="stop-color"
      values="#01FF89; #185a9d; #01FF89"
      dur="4s"
      repeatCount="indefinite"
    ></animate>
  </stop>
</linearGradient>`;
