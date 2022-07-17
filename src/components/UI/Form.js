import "./Form.css";
import { BiLockOpenAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";

const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="em" className="label">
          E-mail
        </label>
        <div className="input-holder">
          <input type="email" className="input" id="em" placeholder="name@mail.com" />
          <span className="icon at">@</span>
        </div>
        <label htmlFor="" className="label">
          Password
        </label>
        <div className="input-holder">
          <input
            className="input"
            type="password"
            placeholder="6+ characters, 1 Capital letter"
          />
          <BiLockOpenAlt className="icon" />
        </div>

        <Button className="btn login-btn submit" type="submit">
          Create an account
        </Button>
        <Button className="btn login-btn sec-login" type="button">
          <FcGoogle className="google" /> Sign up with Google
        </Button>
      </form>
    </>
  );
};
export default Form;
