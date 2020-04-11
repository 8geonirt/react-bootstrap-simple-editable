import React, { useState } from 'react';
import SimpleEditable from 'react-bootstrap-simple-editable';
import 'react-bootstrap-simple-editable/dist/index.css';
import CustomComponent from './CustomComponent';
import PhoneCustomComponent from './PhoneCustomComponent';

const App = () => {
  const [firstInput, setFirstInput] = useState('First input');
  const [secondInput, setSecondInput] = useState('Second input');
  const [fourthInput, setFourthInput] = useState('Fourth input');
  const [fifthInput, setFifthInput] = useState('Fifth input');
  const [phoneType, setPhoneType] = useState('Mobile');
  const [phone, setPhone] = useState('+521213311312');
  const [firstName, setFirstName] = useState('José');
  const [nickname, setNickname] = useState('Trino');
  const [lastName, setLastName] = useState('Espinoza');

  const simpleAction = () => {
    console.log('Simple action...');
  };

  const handleCustomComponent = (values) => {
    setPhoneType(values.type);
    setPhone(values.phone);
  };

  return (
    <div className="simple-editable-example">
      <SimpleEditable
        type="text"
        name="firstInput"
        value={firstInput}
        copyToClipboardEnabled
        onSave={setFirstInput}
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
        onSave={setSecondInput}
      />
      <SimpleEditable
        type="text"
        clearable
        name="fourthInput"
        value={fourthInput}
        copyToClipboardEnabled
        onSave={setFourthInput}
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
        clearable
        copyToClipboardEnabled
        onSave={setFifthInput}
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
        type="custom"
        name="customComponent"
        value={{firstName, nickname, lastName}}
        copyToClipboardEnabled
        display={(values) => {
          return (
            <div key="custom-component-values">{values.firstName} {values.nickname} {values.lastName}</div>
          );
        }}
        onSave={(value) => {
          setFirstName(value.firstName);
          setNickname(value.nickname);
          setLastName(value.lastName);
          console.log('Custom component result', value);
        }}
        customComponent={(value, buttons, submit) => {
          return (
            <CustomComponent
              key="fdsfds"
              value={value}
              buttons={buttons}
              submit={submit}
            />
          );
        }}
      />
      <SimpleEditable
        type="custom"
        name="customComponentWithSelect"
        value={{
          options: [
            {value: 'Mobile', label: 'Mobile'},
            {value: 'Office', label: 'Office'},
          ],
          type: phoneType,
          phone: phone
        }}
        copyToClipboardEnabled
        display={(values) => {
          return (
            <div key="custom-phone-component-value">{values.type} {values.phone}</div>
          );
        }}
        onSave={handleCustomComponent}
        customComponent={(value, buttons, submit) => {
          console.log('component', value);
          return (
            <PhoneCustomComponent
              key="phoneCustomComponent"
              value={value}
              buttons={buttons}
              submit={submit}
            />
          );
        }}
      />
    </div>
  )
}

export default App
