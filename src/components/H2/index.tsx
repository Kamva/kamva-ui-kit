import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";
import { ms } from "../../utils";

interface IH2Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H2 = styled("h2")<IH2Props>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : ms(3))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
`;
