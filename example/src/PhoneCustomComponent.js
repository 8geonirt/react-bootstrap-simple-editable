import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';

const PhoneCustomComponent = (props) => {
  const currentPhone = props.value.phone;
  const currentOption = props.value.type;
  const {
    handleSubmit,
    register,
    errors,
  } = useForm();

  const submit = (values) => {
    props.submit(values);
  };

  const getOptions = () => {
    return props.value.options.map(option => (
      <option value={option.value} key={'option-' + option.value}>
        {option.label}
      </option>
    ));
  };

  const inputRef = useRef();

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      props.setEditing(false);
    }
  };

  return (
    <div className="custom-component">
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-group row">
          <div className="col-sm-3 p-0">
            <select
              defaultValue={currentOption}
              className="form-control"
              name="type"
              ref={
                register({
                  required: "Required"
                })
              }
            >
              {getOptions()}
            </select>
          </div>
          <div className="col-sm-6 p-0">
            <input
              type="text"
              name="phone"
              id="phone"
              autoFocus
              autoComplete="off"
              onKeyDown={handleKeyDown}
              className="form-control"
              defaultValue={currentPhone}
              ref={(e) => {
                register(e, {
                  required: "Required"
                });
                inputRef.current = e;
              }}
            />
            { errors.phone &&
              <div className="">
                {errors.phone.message}
              </div>
            }
          </div>
          <div>
            {props.buttons}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PhoneCustomComponent;
