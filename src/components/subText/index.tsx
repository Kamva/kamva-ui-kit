import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";

interface ISubTextProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const SubText = styled("h6")<ISubTextProps>`
  color: ${props => (props.color ? props.color : colorPallet.subText)};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "300")};
`;
