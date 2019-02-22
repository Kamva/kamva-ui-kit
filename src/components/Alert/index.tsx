import * as React from "react";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import { useAlert, withAlert } from "react-alert";
import { AlertMsg } from "./alertMsg";

const AlertTemplate = ({ style, options, message, close }) => {
  return (
    <div style={style}>
      <AlertMsg type={options.type}>{message}</AlertMsg>
    </div>
  );
};

const providerOptions = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  offset: "24px",
  transition: transitions.fade,
};

export interface IAppAlert {
  children: React.ReactNode;
  optionsReactAlert?: object;
}

export const AppAlert: React.FunctionComponent<IAppAlert> = ({
  children,
  optionsReactAlert = providerOptions,
}) => {
  return (
    <AlertProvider template={AlertTemplate} {...optionsReactAlert}>
      {children}
    </AlertProvider>
  );
};

export { useAlert, withAlert, transitions, positions };
