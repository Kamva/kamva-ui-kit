import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";
import { ms } from "../../utils";

interface IH1Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H1 = styled("h1")<IH1Props>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : ms(4))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
`;
