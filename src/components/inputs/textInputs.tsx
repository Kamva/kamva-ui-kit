import * as React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import { ms } from "../../utils";
import { GlobalStyle } from "../../GlobalStyle";
import { rem } from "polished";
import { colorPallet } from "../../types";

const StyledLabel = styled("label")`
  font-size: ${ms(0)};
  font-weight: bold;
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

interface IStyledInput {
  error?: boolean;
  ltr?: boolean;
}

const StyledInput = styled("input")<IStyledInput>`
  direction: ${props => (props.ltr ? "ltr" : "rtl")};
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

const StyledTextArea = styled("textarea")<IStyledInput>`
  direction: ${props => (props.ltr ? "ltr" : "rtl")};
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
  ltr?: boolean;
}
export const Input: React.SFC<
  IInput | React.HTMLProps<HTMLInputElement>
> = props => {
  const { label, id, ...prop } = props as IInput;
  if (label) {
    return (
      <Fragment>
        <StyledLabel htmlFor={id}>
          <span>{label}</span>
          <StyledInput id={id} {...prop} className="ui-kit" />
        </StyledLabel>
        <GlobalStyle />
      </Fragment>
    );
  }
  return <StyledInput id={id} {...prop} />;
};

export const TextArea: React.SFC<
  IInput | React.HTMLProps<HTMLTextAreaElement>
> = props => {
  const { label, id, ...prop } = props as IInput;
  if (label) {
    return (
      <Fragment>
        <StyledLabel htmlFor={id}>
          <span>{label}</span>
          <StyledTextArea id={id} {...prop} className="ui-kit" />
        </StyledLabel>
        <GlobalStyle />
      </Fragment>
    );
  }
  return <StyledInput id={id} {...prop} />;
};
