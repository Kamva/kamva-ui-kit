import * as React from "react";
import styled from "styled-components";
import { SvgActive } from "./icons";
import { colorPallet } from "../../types";
import { darken, rem } from "polished";
import { GlobalStyle } from "../../GlobalStyle";

interface ICheckBox {
  id: string;
}
export const StyledCheckbox = styled("input")`
  &[type="checkbox"] {
    display: none;
  }
  &[type="checkbox"] + label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  & + label:before {
    content: " ";
    border: 1px solid ${colorPallet.primary};
    border-radius: ${rem("5px")};
    display: inline-block;
    width: ${rem("25px")};
    height: ${rem("25px")};
    color: transparent;
  }
  &[type="checkbox"]:checked + label:before {
    background-color: ${colorPallet.primary};
  }
  &[type="checkbox"]:checked:hover + label:before {
    background-color: ${colorPallet.primary};
    background-color: ${darken(0.1, colorPallet.primary)};
  }
  &[type="checkbox"]:checked:disabled + label:before {
    opacity: 0.3;
  }
`;

const StyledLabel = styled("label")`
  svg {
    position: relative;
    right: -${rem("22.5px")};
    fill: #fff;
  }
`;

export const CheckBox: React.SFC<
  ICheckBox | React.HTMLProps<HTMLInputElement>
> = props => {
  const { id, ...prop } = props as ICheckBox;
  return (
    <React.Fragment>
      <StyledCheckbox type="checkbox" id={id} {...prop} />
      <StyledLabel htmlFor={id}>
        <SvgActive />
      </StyledLabel>
      <GlobalStyle />
    </React.Fragment>
  );
};
