import * as React from "react";
import styled from "styled-components";
import { colorPallet } from "../../utils/style";
import { ResetButton } from "./resetButton";

export const PrimaryButton = styled(ResetButton)`
  position: relative;
  text-align: center;
  border-radius: 2.1875rem;
  margin: 0.2rem 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.5s ease;
  overflow: hidden;
  z-index: 5555;
  cursor: pointer;
  color: #fff;
  color: #fff;
  font-weight: 900;

  background-color: ${props =>
    !props.color
      ? `rgba(${colorPallet.primary}, 1)`
      : `rgba(${props.color}, 1)`};

  box-shadow: 0px 15px 47px
    ${props =>
      !props.color
        ? `rgba(${colorPallet.primary}, 0.64)`
        : `rgba(${props.color}, 0.30)`};

  ${props =>
    props.disable &&
    `background-color: ${
      !props.color
        ? `rgba(${colorPallet.primary}, 0.4)`
        : `rgba(${props.color}, 0.4)`
    }}`};

  ${props => props.disable && `box-shadow: none; cursor: not-allowed`};
  ${props => props.disable && `&:before {display: none;}`};
  &:before {
    content: "";
    position: absolute;
    top: -39px;
    right: -62px;
    bottom: 0;
    left: 0;
    border-right: 50px solid rgba(0, 0, 0, 0.5);
    border-bottom: 160px solid rgba(0, 0, 0, 0.5);
    opacity: 0.4;
    -webkit-transform: translateX(-100%);
    transition: all 0.3s ease;
    transform: translateX(-100%);
    border-radius: 50%;
    z-index: -2222;
  }

  &:hover {
    &:before {
      transform: translateX(-10%);
    }
  }
`;
