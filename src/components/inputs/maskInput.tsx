import * as React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
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

const Input: React.FunctionComponent<
  IInput | React.HTMLProps<HTMLInputElement>
> = React.forwardRef((props, ref) => {
  const { label, id, isError, errorMsg, ...prop } = props as IInput;
  if (label) {
    return (
      <Fragment>
        <StyledLabel htmlFor={id}>
          <span>{label}</span>
          {isError && errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <StyledInput
            ref={ref}
            id={id}
            {...prop}
            isError={isError}
            className="ui-kit"
          />
        </StyledLabel>
        <GlobalStyle />
      </Fragment>
    );
  }
  return <StyledInput isError={isError} id={id} {...prop} />;
});

interface IInputMask {
  id: string;
  mask: any;
  label?: string;
  error?: boolean;
  ltr?: boolean;
  isError?: boolean;
  errorMsg?: null | string;
}

// use type from here https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-text-mask/index.d.ts
export const InputMask: React.FunctionComponent<
  IInputMask | MaskedInputProps
> = props => {
  const { id, mask } = props as IInputMask;
  return (
    <MaskedInput
      mask={mask}
      id={id}
      {...props}
      render={(ref, property) => <Input ref={ref} {...property} />}
    />
  );
};
