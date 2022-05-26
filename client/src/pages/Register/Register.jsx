import { useReducer, useEffect, useState } from "react";
import { Logo, FormRow, Alert } from "../../components";
import { DISPLAY_ALERT } from "../../context/actions";
import { useAppContext } from "../../context/appContext";
import reducer from "../../context/reducer";
import Wrapper from "./Register.styles";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  // global state and useNavigate
  const { isLoading, showAlert, displayAlert } = useAppContext();

  const toggleMember = () => {
    setValues((prevValue) => {
      return { ...values, isMember: !prevValue.isMember };
    });
  };

  // changing input values in local-state
  const onHandleChange = (e) => {
    // Dynamic Property Keys -> https://www.samanthaming.com/tidbits/37-dynamic-property-name-with-es6/
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    // else:
    console.log(values);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {/* name input */}
        {values.isMember && (
          <FormRow
            type="text"
            name="name"
            labelText="name"
            value={values.name}
            handleChange={onHandleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          labelText="email"
          values={values.email}
          handleChange={onHandleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          labelText="password"
          values={values.password}
          handleChange={onHandleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>

        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
