# react-bootstrap-simple-editable

> A simple editable plugin with simple validations

[![NPM](https://img.shields.io/npm/v/react-bootstrap-simple-editable.svg)](https://www.npmjs.com/package/react-bootstrap-simple-editable) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-bootstrap-simple-editable
```

## Usage

```jsx
import React, { Component } from 'react'
import SimpleEditable from 'react-bootstrap-simple-editable'
import 'react-bootstrap-simple-editable/dist/index.css'

class Example extends Component {
  render() {
    return (
      <SimpleEditable
        type="text"
        name="myInput"
        value={myInput}
        onSave={(value) => {
          setInputValue(value);
        }}
      />
    );
  }
}
```

## Live demo
(See demos here](https://8geonirt.github.io/react-bootstrap-simple-editable)

## Project has just started...
Going to add support to more stuff later...

## License

MIT © [8geonirt](https://github.com/8geonirt)
