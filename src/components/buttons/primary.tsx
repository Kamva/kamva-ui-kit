import * as React from "react";
import styled, { withTheme } from "styled-components";

export let PrimaryButton = styled('button')`
	background-color: ${props => `rgba(${props.theme.pallet.primary})`};
`;

PrimaryButton = withTheme(PrimaryButton);
