import * as React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./primary";
import { colorPallet } from "../../types";

export const Outline = styled(PrimaryButton)`
  font-weight: 300;
  color: ${props =>
    !props.color
      ? `rgba(${colorPallet.primary}, 1)`
      : `rgba(${props.color}, 1)`};
  background-color: #fff;
  box-shadow: 0px 3px 6px rgba(1, 1, 1, 0.16);
  ${props => props.disable && `box-shadow: none; cursor: not-allowed`};
  &:before {
    display: none;
  }
  ${props =>
    props.circle &&
    `border-radius: 50%; display: flex; justify-content: center; align-items: center; padding: 0.5rem;`};
`;
