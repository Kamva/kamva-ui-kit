import * as React from "react";
import styled from "styled-components";
import { PrimaryButton } from "./primary";
import { colorPallet } from "../../utils/style";

export const Secondary = styled(PrimaryButton)`
	font-weight: 500;
  box-shadow: 0px 4px 6px
    ${props =>
      !props.color
        ? `rgba(${colorPallet.primary}, 0.64)`
        : `rgba(${props.color}, 0.30)`};

  ${props => props.disable && `box-shadow: none; cursor: not-allowed`};
`;
