import * as React from "react";
import styled from "styled-components";
import { colorPallet, IHeadingProps } from "../../types";

export const SubText = styled("h6")<IHeadingProps>`
  color: ${props => (props.color ? props.color : colorPallet.subText)};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "300")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
`;
