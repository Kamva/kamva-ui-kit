import * as React from "react";
import styled from "styled-components";
import { colorPallet, IHeadingProps } from "../../types";

export const H6 = styled("h6")<IHeadingProps>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
`;
