import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";
import { ms } from "../../utils";

interface IH4Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H4 = styled("h4")<IH4Props>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : ms(1))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
`;