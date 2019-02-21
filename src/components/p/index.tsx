import * as React from "react";
import styled from "styled-components";
import { IParagraphProps, colorPallet } from "../../types";

export const P = styled("p")<IParagraphProps>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  margin: ${props => (props.margin ? props.margin : "0")};
  padding: ${props => (props.padding ? props.padding : "0")};
`;
