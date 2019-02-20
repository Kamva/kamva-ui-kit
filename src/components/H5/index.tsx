import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";
import { ms } from "../../utils";

interface IH5Props {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
}

export const H5 = styled("h5")<IH5Props>`
  color: ${props => (props.color ? props.color : colorPallet.black)};
  font-size: ${props => (props.fontSize ? props.fontSize : ms(0))};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
`;
