import React from 'react';
import Input from './Input';

const INPUT_TYPES = {
  text: <Input />
}

const Editable = (type, props) => {
  return React.cloneElement(INPUT_TYPES[type], {...props});
};

export {
  Editable
};
