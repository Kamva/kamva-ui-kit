import * as React from "react";
import styled from "styled-components";
import { colorPallet, IHeadingProps } from "../../types";
import { ms } from "../../utils";

export const H5 = styled("h5")<IHeadingProps>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : ms(0))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
`;
