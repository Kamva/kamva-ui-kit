import * as React from "react";
import styled from "styled-components";
import { ms } from "../../utils";

interface IH1Props {
  color?: string;
  fontSize?: number;
}

export const H1 = styled("h1")<IH1Props>`
  font-size: ${props => (props.fontSize ? props.fontSize : ms(4))};
`;
