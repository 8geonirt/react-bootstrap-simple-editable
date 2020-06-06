import React, { forwardRef } from 'react';

const TextArea = forwardRef((props, ref) => {
  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.setEditing(false);
    }
  };

  const { setEditing, ...inputProps } = props;

  return (
    <textarea
      autoFocus
      type="text"
      ref={ref}
      onKeyDown={handleKeyDown}
      autoComplete="off"
      {...inputProps}
      name="myInput"
    />
  );
});

export default TextArea;
