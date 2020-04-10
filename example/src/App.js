import React, { useState } from 'react'
import SimpleEditable from 'react-bootstrap-simple-editable'
import 'react-bootstrap-simple-editable/dist/index.css';

const App = () => {
  const [firstInput, setFirstInput] = useState('First input');
  const [secondInput, setSecondInput] = useState('Second input');
  const [fourthInput, setFourthInput] = useState('Fourth input');
  const [fifthInput, setFifthInput] = useState('Fifth input');

  const simpleAction = () => {
    console.log('Simple action...');
  };

  return (
    <div className="simple-editable-example">
      <SimpleEditable
        type="text"
        name="firstInput"
        value={firstInput}
        copyToClipboardEnabled
        onSave={(value) => {
          setFirstInput(value);
        }}
        errorComponent={(error) => {
          return (
            <div className="custom-error invalid-feedback" key="first-input-error">
              This is a custom error display: {error}
            </div>
          )
        }}
      />
      <SimpleEditable
        type="text"
        name="secondInput"
        value={secondInput}
        onSave={(value) => {
          setSecondInput(value);
        }}
      />
      <SimpleEditable
        type="text"
        name="fourthInput"
        value={fourthInput}
        copyToClipboardEnabled
        onSave={(value) => {
          setFourthInput(value);
        }}
        hoverButtons={() => {
          return (
            <div key="simple-actions">
              <div className="dropdown show">
                <span onClick={simpleAction} className="editable-action__icon editable-action__icon-bordered" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          );
        }}
      />
      <SimpleEditable
        type="text"
        name="fifthInput"
        value={fifthInput}
        copyToClipboardEnabled
        onSave={(value) => {
          setFifthInput(value);
        }}
        hoverButtons={() => {
          return (
            <div key="simple-actions">
              <div className="dropdown show">
                <span onClick={simpleAction} className="editable-action__icon editable-action__icon-bordered" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
          );
        }}
      />
    </div>
  )
}

export default App
