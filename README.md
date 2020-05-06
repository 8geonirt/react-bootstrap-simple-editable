
# react-bootstrap-simple-editable

> A simple editable plugin with simple validations

[![NPM](https://img.shields.io/npm/v/react-bootstrap-simple-editable.svg)](https://www.npmjs.com/package/react-bootstrap-simple-editable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Welcome to my little project, I had the necessity to create something like this because of a project I am helping to build, the design required to implement something complex, I started looking at some libraries and found a really good ones, unfortunately those did not give me the enough functionality to customize them and to adapt them to what I need.

I got inspired on those libraries to build my own, and so far this is what I've built with this one.
![advancedexample](https://user-images.githubusercontent.com/2782816/81238955-0b5c0580-8fc9-11ea-90f4-51a5f6a7293c.gif)

There are a lot of libraries like this around there, I am going to mention the ones that inspired me to build this one. [https://github.com/ni3galave/react-x-editable](https://github.com/ni3galave/react-x-editable) and [https://github.com/kunyan/react-bootstrap-xeditable](https://github.com/kunyan/react-bootstrap-xeditable)...
I really like them, they are great but those are not what I needed, so here I am learning and trying to do some give back.

And I don't want to forget about this one: I am using the library **React Hook Form** which you can find it [here](https://react-hook-form.com/), you can take a look at it to see how powerful it is regarding to validations, and BTW, the performance is really good (check the comparison with other libraries as well).  I would like to add more features like passing custom validations using patterns by taking advantage of this React Hook Form library, so if you want to contribute with it (or something else) feel free to do it.

I wanted to share this to any developer who wants or needs to build something like in the recording above.
Hope you find it useful, it's my first library published to NPM and any feedback is always welcome.

## Install

```bash
npm install --save react-bootstrap-simple-editable
```

## Usage

### Basic usage
```jsx
import React, { useState } from 'react'
import SimpleEditable from 'react-bootstrap-simple-editable'
import 'react-bootstrap-simple-editable/dist/index.css'

const Example = () => {
  const [myInput, setMyInput] = useState('example');
  return (
    <SimpleEditable
      type="text"
      name="myInput"
      value={myInput}
      onSave={(value) => {
        setMyInput(value);
      }}
    />
  );
}
```
## Output
![basic usage](https://user-images.githubusercontent.com/2782816/81238500-def3b980-8fc7-11ea-84de-269a07101f29.gif)
## Advanced
```jsx
import React,  { useState }  from  'react'  import SimpleEditable from  'react-bootstrap-simple-editable'  import  'react-bootstrap-simple-editable/dist/index.css'
// Check https://github.com/8geonirt/react-bootstrap-simple-editable/blob/master/src/stories/CustomComponent.js
import CustomComponent from './CustomComponent';

const Example = () => {
  const [userName, setUserName] = useState('8geonirt');
  const [firstName, setFirstName] = useState('Trino');
  const [lastName, setLastName] = useState('Espinoza');
  return (
    <SimpleEditable
      type="custom"
      name="customComponent"
      value={{userName, firstName, lastName}}
      copyToClipboardEnabled
      display={(values) => {
        return (
          <div key="custom-component-values">
            @{values.userName} {values.firstName} {values.lastName}
          </div>
        );
      }}
      onSave={(value) => {
        setUserName(value.userName);
        setFirstName(value.firstName);
        setLastName(value.lastName);
      }}
      customComponent={(value, buttons, submit) => {
        return (
          <CustomComponent
            key="customComponent"
            value={value}
            buttons={buttons}
            submit={submit}
          />
        );
      }}
    />
  );
}
```

## Output
![customcomponent](https://user-images.githubusercontent.com/2782816/81238434-b4096580-8fc7-11ea-8508-527c0a987404.gif)
## OPTIONS
|Name   |Type |Description   |
|---|---|---|
|type  |  **string** | For now only supports 'text' and 'custom' ([examples](https://8geonirt.github.io/react-bootstrap-simple-editable)) . |
|onSave   | **function**  | callback that will receive the value after submitted.  |
|errorComponent   | **function**   | callback with the error object, you can customize the way an error will show up.  |
|className   |  **string**, *default*: 'simple-editable' | Override this class to customize the styling of the component. |
|copyToClipboardEnabled   | **bool**, *default*: false  | Set this to true to show a clickable copy icon on hover, once clicked it will copy the value to the clipboard, the copied value can be also customized by setting the clipboardValue prop. Default icon can be changed by overriding the 'copy' value from the iconsClassName prop. |
|clipboardValue   | **function**  | Function that returns React element with the HTML code to be copied, if not sent then the component is going to copy the input value. |
|copyMessage   | **function**, *default*: Successfully copied to clipboard.   |  Message to be shown after executing the action of copying to the clipboard. |
|hoverButtons   | **function**  | Function that returns the React element with hover icons  |
|customComponent   | **function**  | Function that returns the React element, check examples to see usage  |
|clearable   | **bool**, *default*: false  | If set to true then an 'x' icon will show up at the right of the input allowing an user to clear the input  |
|iconsClassName   | **object**, *default*: { ok: 'fa-fa-check', cancel: 'fa fa-times', copy: 'fa fa-copy'} |You can override those clases if you are not using FontAwesome or if you are using FontAwesomePro like using solid and light icons 'fas' 'fal'.   |

## DEMO
[See demos here](https://8geonirt.github.io/react-bootstrap-simple-editable)

## Project has just started...
It only supports input type=text and custom components, check examples above.
Going to add support to more stuff later...

## Contribute
Feel free to use/fork the repository and to create Pull Requests to add features or fix/refactor code.

Any feedback is always welcome!

## License

MIT © [8geonirt](https://github.com/8geonirt)
