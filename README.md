# Kamva UI Kit

## Installation

```
$ npm install --save-dev @kamva/ui-kit
```

## buttons

### usage

example:

```jsx
import React from "react";
import { Button, colorPallet } from "kamva-ui-kit";

const Example = () => {
  return (
    <Button>primary</Button>
    <Button color={colorPallet.third} secondary>secondary button</Button>
    <Button outline>outline button</Button>
  );
}
```
