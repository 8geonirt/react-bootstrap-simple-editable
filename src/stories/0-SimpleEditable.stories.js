import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import SimpleEditable from '../index';
import CustomComponent from './CustomComponent';
import PhoneCustomComponent from './PhoneCustomComponent';

export default {
  title: 'SimpleEditable',
  component: SimpleEditable,
};

export const Basic = () => {
  const [value, setValue] = useState('Basic usage');
  return (
    <SimpleEditable
      type="text"
      name="input"
      value={value}
      onSave={(value) => {
        setValue(value);
      }}
    />
  )
};

export const ClearableInput = () => {
  const [value, setValue] = useState('Clearable input');
  return (
    <SimpleEditable
      type="text"
      name="input"
      clearable
      value={value}
      onSave={(value) => {
        setValue(value);
      }}
    />
  )
};

export const CopyToClipboard = () => {
  const [value, setValue] = useState('Copy to Clipboard');
  return (
    <SimpleEditable
      type="text"
      copyToClipboardEnabled
      name="input"
      clearable
      value={value}
      onSave={(value) => {
        setValue(value);
      }}
    />
  )
};

export const TextArea = () => {
  const [value, setValue] = useState('TextArea example');
  return (
    <SimpleEditable
      type="textarea"
      name="input"
      value={value}
      onSave={(value) => {
        setValue(value);
      }}
    />
  )
};

export const WithCustomComponent = () => {
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
};

export const HoverButtons = () => {
  const [userName, setUserName] = useState('8geonirt');
  const [firstName, setFirstName] = useState('Trino');
  const [lastName, setLastName] = useState('Espinoza');
  return (
    <SimpleEditable
      type="custom"
      name="customComponent"
      value={{userName, firstName, lastName}}
      copyToClipboardEnabled
      hoverButtons={() => {
        return (
          <div key="simple-actions" className="simple-actions">
            <i
              onClick={() => {
                alert('Logic to delete this record or field');
              }}
              className="fa fa-times">
            </i>
            <i
              onClick={() => {
                window.open(`https://github.com//${userName}`,'_blank');
              }}
              className="fa fa-external-link"
            >
            </i>
          </div>
        );
      }}
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
};

export const CustomComponentWithSelect = () => {
  const [phoneType, setPhoneType] = useState('Mobile');
  const [phone, setPhone] = useState('+521213311312');

  const handleCustomComponent = (values) => {
    setPhoneType(values.type);
    setPhone(values.phone);
  };

  return (
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
          <div key="custom-phone-component-value">
            {values.type} {values.phone}
          </div>
        );
      }}
      onSave={handleCustomComponent}
      customComponent={(value, buttons, submit) => {
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
  );
};
