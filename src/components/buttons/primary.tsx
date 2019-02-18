import * as React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { colorPallet } from "../../types";
import { GlobalStyle } from "../../GlobalStyle";
import { darken, rem, rgba } from "polished";

interface IPrimaryBtnProps {
  defaultColor: string;
  defaultFontColor: string;
  fontColor?: string;
  fontWeight?: string;
}

const PrimaryButton = styled("button")<IPrimaryBtnProps>`
  padding: 1rem 1.5rem;
  border-radius: ${rem("45px")};
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease-in-out;
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "800")};
  background-color: ${props =>
    props.color ? props.color : props.defaultColor};
  color: ${props =>
    props.fontColor ? props.fontColor : props.defaultFontColor};
  box-shadow: ${props =>
    props.color
      ? `0 4px 6px ${rgba(props.color, 0.3)}`
      : `0 4px 6px ${rgba(props.defaultColor, 0.3)}`};
  svg {
    fill: ${props =>
      props.fontColor ? props.fontColor : props.defaultFontColor};
  }
  &:hover,
  &:focus {
    background-color: ${props =>
      props.color ? darken(0.1, props.color) : darken(0.1, props.defaultColor)};
  }
  &[disabled] {
    background-color: ${props =>
      props.color ? rgba(props.color, 0.35) : rgba(props.defaultColor, 0.35)};
    cursor: not-allowed;
    color: ${props =>
      props.fontColor
        ? rgba(props.fontColor, 0.3)
        : rgba(props.defaultFontColor, 0.3)};
  }
`;

interface IPrimaryBtnProps {
  primary?: boolean;
  secondary?: boolean;
  color?: string;
  fontColor?: string;
  fontWeight?: string;
}

export const Button: React.SFC<
  IPrimaryBtnProps | React.HTMLProps<HTMLButtonElement>
> = props => {
  const { secondary, ...prop } = props as IPrimaryBtnProps;
  if (secondary) {
    return (
      <Fragment>
        <PrimaryButton
          defaultFontColor={colorPallet.secondaryButtonColor}
          defaultColor={colorPallet.secondary}
          {...prop}
        />
        <GlobalStyle />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <PrimaryButton
        defaultFontColor={colorPallet.primaryButtonColor}
        defaultColor={colorPallet.primary}
        {...prop}
      />
      <GlobalStyle />
    </Fragment>
  );
};
