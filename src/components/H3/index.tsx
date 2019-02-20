import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";
import { ms } from "../../utils";

interface IH3Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H3 = styled("h3")<IH3Props>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : ms(2))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
`;
