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
  position: relative;
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
`;

interface IStyledInput {
  error?: boolean;
  ltr?: boolean;
  isError: boolean;
}

const StyledInput = styled("input")<IStyledInput>`
  direction: ${props => (props.ltr ? "ltr" : "rtl")};
  min-width: ${rem(376)};
  border: 1px solid;
  border-color: ${props =>
    props.error ? colorPallet.secondary : colorPallet.borderColor};
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: ${rem("5px")};
  transition: border-color 0.3s ease-in-out, background-color 0.2s ease-in-out;
  background-color: ${colorPallet.boxBackgroundColor};
  border-color: ${props => props.isError && "red"};
  ::placeholder {
    color: #a4a4a4;
  }
  &:focus {
    border-color: ${props =>
      props.error ? colorPallet.secondary : colorPallet.primary};
    background-color: #fff;
    border-color: ${props => props.isError && "red"};
  }
`;

interface IStyledTextArea {
  error?: boolean;
  ltr?: boolean;
}

const StyledTextArea = styled("textarea")<IStyledTextArea>`
  direction: ${props => (props.ltr ? "ltr" : "rtl")};
  min-width: ${rem(376)};
  border: 1px solid;
  border-color: ${props =>
    props.error ? colorPallet.secondary : colorPallet.borderColor};
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: ${rem("5px")};
  transition: border-color 0.3s ease-in-out, background-color 0.2s ease-in-out;
  background-color: ${colorPallet.boxBackgroundColor};

  ::placeholder {
    color: #a4a4a4;
  }
  &:focus {
    border-color: ${props =>
      props.error ? colorPallet.secondary : colorPallet.primary};
    background-color: #fff;
  }
`;

const ErrorMsg = styled("span")`
  position: absolute;
  left: 0;
  top: -2.5rem;
  color: red;
  font-size: 14px;
`;

interface IInput {
  id: string;
  label?: string;
  error?: boolean;
  ltr?: boolean;
  isError?: boolean;
  errorMsg?: null | string;
}
export const Input: React.SFC<
  IInput | React.HTMLProps<HTMLInputElement>
> = props => {
  const { label, id, isError, errorMsg, ...prop } = props as IInput;
  if (label) {
    return (
      <Fragment>
        <StyledLabel htmlFor={id}>
          <span>{label}</span>
          {isError && errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <StyledInput id={id} {...prop} isError={isError} className="ui-kit" />
        </StyledLabel>
        <GlobalStyle />
      </Fragment>
    );
  }
  return <StyledInput isError={isError} id={id} {...prop} />;
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
  return <StyledTextArea id={id} {...prop} />;
};
