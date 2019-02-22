import * as React from "react";
import { em } from "polished";
import { SvgActive } from "../inputs/icons";

export const SVGWarning = props => (
  <svg width={em("24px")} height={em("24px")} viewBox="0 0 512 512" {...props}>
    <path d="M409.24,453.59H102.83a74.24,74.24,0,0,1-63.07-113.4L192.93,93.49A73.81,73.81,0,0,1,256,58.41h0a73.81,73.81,0,0,1,63.07,35.08l153.24,246.7a74.24,74.24,0,0,1-63.07,113.4ZM256,98.41a33.61,33.61,0,0,0-29.09,16.18L73.74,361.29a34.24,34.24,0,0,0,29.09,52.3H409.24a34.24,34.24,0,0,0,29.09-52.3L285.08,114.59A33.58,33.58,0,0,0,256,98.41ZM276,297V144a20,20,0,0,0-40,0V297a20,20,0,0,0,40,0Zm0,79V358a20,20,0,0,0-40,0v18a20,20,0,0,0,40,0Z" />
  </svg>
);

export const SVGAlert = props => (
  <svg width={em("24px")} height={em("24px")} viewBox="0 0 512 512" {...props}>
    <path d="M256,484A228,228,0,0,1,94.76,94.76,228,228,0,0,1,424.24,424.24,226.56,226.56,0,0,1,256,484Zm0-416C152.32,68,68,152.32,68,256s84.34,188,188,188,188-84.35,188-188S359.67,68,256,68Zm14.29,241.4V109.71a20,20,0,0,0-40,0V309.38a20,20,0,0,0,40,0Zm0,94V378.71a20,20,0,0,0-40,0v24.67a20,20,0,0,0,40,0Z" />
  </svg>
);

export const AlertIcons = ({ type }) => {
  switch (type) {
    case "info":
      return <SVGAlert />;
    case "success":
      return <SvgActive />;
    case "error":
      return <SVGWarning />;
    default:
      return null;
  }
};
