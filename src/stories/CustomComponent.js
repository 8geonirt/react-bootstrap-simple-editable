import React from 'react'
import { useForm } from 'react-hook-form';

const CustomComponent = (props) => {
  const currentUserName = props.value.userName;
  const currentFirstName = props.value.firstName;
  const currentLastName = props.value.lastName;
  const {
    handleSubmit,
    register,
    errors
  } = useForm();

  const submit = (values) => {
    props.submit(values);
  };

  return (
    <div className="custom-component">
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-group row">
          <label htmlFor="userName" className="col-sm-3">Username</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="userName"
              autoFocus
              id="userName"
              autoComplete="off"
              className="form-control"
              defaultValue={currentUserName}
              ref={
                register({required: "Required"})
              }
            />
            { errors.userName &&
              <div className="custom-error">
                {errors.userName.message}
              </div>
            }
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="firstName" className="col-sm-3">First Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoFocus
              autoComplete="off"
              className="form-control"
              defaultValue={currentFirstName}
              ref={
                register({required: "Required"})
              }
            />
            { errors.firstName &&
              <div className="">
                {errors.firstName.message}
              </div>
            }
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="lastName" className="col-sm-3">Last Name</label>
          <div className="col-sm-9">
            <input
              type="text"
              name="lastName"
              autoFocus
              id="lastName"
              autoComplete="off"
              className="form-control"
              defaultValue={currentLastName}
              ref={
                register({required: "Required"})
              }
            />
            { errors.lastName &&
              <div className="">
                {errors.lastName.message}
              </div>
            }
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-sm-3 col-md-10">
            {props.buttons}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomComponent;
