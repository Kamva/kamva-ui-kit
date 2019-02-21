import * as React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";
import { GlobalStyle } from "../../GlobalStyle";
import { darken, rem, rgba } from "polished";

interface ISecondaryProps {
  defaultColor: string;
  fontColor?: string;
  fontWeight?: string;
  round?: boolean;
}

const Secondary = styled("button")<ISecondaryProps>`
  padding: 1rem 1.5rem;
  border-radius: ${rem("45px")};
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease-in-out;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "800")};
  background-color: ${props =>
    props.color ? rgba(props.color, 0.1) : rgba(props.defaultColor, 0.1)};
  color: ${props => (props.color ? props.color : props.defaultColor)};
  box-shadow: ${props =>
    props.color
      ? `0 4px 6px ${rgba(props.color, 0.3)}`
      : `0 4px 6px ${rgba(props.defaultColor, 0.3)}`};
  svg {
    fill: ${props => (props.color ? props.color : props.defaultColor)};
  }
  &:hover,
  &:focus {
    background-color: ${props =>
      props.color ? rgba(props.color, 0.2) : rgba(props.defaultColor, 0.2)};
    color: ${props =>
      props.color ? darken(0.2, props.color) : darken(0.2, props.defaultColor)};
  }
  &[disabled] {
    cursor: not-allowed;
    color: ${props =>
      props.color ? rgba(props.color, 0.1) : rgba(props.defaultColor, 0.1)};
    background-color: ${props =>
      props.color ? rgba(props.color, 0.1) : rgba(props.defaultColor, 0.1)};
    opacity: 0.7;
  }
  ${props =>
    props.round &&
    `
      width: ${rem("60px")};
      height: ${rem("60px")};
      border-radius: 100%;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      letter-spacing: 0px;
      box-shadow: none;
    `}
`;

interface ISecondaryButtonProps {
  primary?: boolean;
  secondary?: boolean;
  color?: string;
  fontColor?: string;
  fontWeight?: string;
  round?: boolean;
}

export const SecondaryButton: React.SFC<
  ISecondaryButtonProps | React.HTMLProps<HTMLButtonElement>
> = props => {
  const { secondary, ...prop } = props as ISecondaryButtonProps;
  if (secondary) {
    return (
      <Fragment>
        <Secondary defaultColor={colorPallet.secondary} {...prop} />
        <GlobalStyle />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <Secondary defaultColor={colorPallet.primary} {...prop} />
      <GlobalStyle />
    </Fragment>
  );
};
