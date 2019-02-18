import * as React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { ms } from "../../utils";
import { GlobalStyle } from "../../GlobalStyle";
import { rem } from "polished";
import { colorPallet } from "../../types";

const StyledLabel = styled("label")`
  display: block;
  font-size: ${ms(0)};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

interface IStyledInput {
  error?: boolean;
}

const StyledInput = styled("input")<IStyledInput>`
  min-width: ${rem(376)};
  border: 1px solid;
  border-color: ${props => (props.error ? colorPallet.secondary : "#F0F0F0")};
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: ${rem("5px")};
  transition: border-color 0.3s ease-in-out;
  &:focus {
    border-color: ${props =>
      props.error ? colorPallet.secondary : colorPallet.primary};
  }
`;
interface IInput {
  id: string;
  label?: string;
  error?: boolean;
}
export const Input: React.SFC<
  IInput | React.HTMLProps<HTMLInputElement>
> = props => {
  const { label, id, ...prop } = props as IInput;
  if (label) {
    return (
      <Fragment>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledInput id={id} {...prop} />
        <GlobalStyle />
      </Fragment>
    );
  }
  return <input id={id} {...prop} />;
};
