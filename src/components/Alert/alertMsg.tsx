import * as React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { rem } from "polished";
import { ms } from "../../utils";
import { colorPallet } from "../../types";
import { AlertIcons } from "./icons";

const Div = styled("div")`
  direction: rtl;
  font-family: inherit;
  padding: ${rem("16px")};
  border-radius: ${rem("10px")};
  font-size: ${ms(0)};
  display: flex;
  align-items: center;
  background-color: ${colorPallet.primary};

  svg {
    fill: #fff;
    margin-left: 16px;
  }

  p {
    font-weight: 800;
    padding: 0;
    color: #fff;
    margin: 0;
  }
`;

interface IAlertMsg {
  type: string;
  children: React.ReactNode;
}

export const AlertMsg: FunctionComponent<IAlertMsg> = ({ children, type }) => {
  return (
    <Div>
      <AlertIcons type={type} />
      {children}
    </Div>
  );
};
