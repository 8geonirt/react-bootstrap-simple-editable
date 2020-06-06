import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

const INPUT_TYPES = {
  text: <Input />,
  textarea: <TextArea />
}

const Editable = (type, props) => {
  return React.cloneElement(INPUT_TYPES[type], {...props});
};

export {
  Editable
};
