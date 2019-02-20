import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";

interface IH5Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H6 = styled("h6")<IH5Props>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
`;
