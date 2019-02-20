# Kamva UI Kit

## Installation

```
$ npm install --save-dev @kamva/ui-kit
```

## buttons

example:

```jsx
import React from "react";
import { Button, PrimaryButton } from "@kamva/ui-kit";

const Example = () => {
  return (
      <Button>primary</Button>
      <PrimaryButton secondary>secondary button</Button>
      <PrimaryButton round>?</Button>
  ) ;
}
```

## Input Props

| props | type             | default                                     |
| ----- | ---------------- | ------------------------------------------- |
| id    | string. required | null                                        |
| label | string           | null. if its passed render label with input |
| error | boolean          | false. if will be true border color changes |
| ltr   | boolean          | false.                                      |

## 💡 Fomrik example:

```jsx
import React from "react";
import { Input } from "@kamva/ui-kit";

const Example = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{ email: "eee", color: "red", firstName: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={(props: any) => {
        const { handleSubmit, email, values } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Input
              type={"email"}
              value={values.email}
              name="email"
              placeholder="Email"
              id="email"
              label={"hello"}
            />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  </div>
);
```

## CheckBox Props

| props | type             | default |
| ----- | ---------------- | ------- |
| id    | string. required | null    |
