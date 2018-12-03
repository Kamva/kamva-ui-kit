import * as React from 'react';
import { render } from 'react-dom';
import { Button } from '../dist/index';

const Span = () => <span>Hello</span>
render(<Button>Hello</Button>, document.getElementById("root"));
