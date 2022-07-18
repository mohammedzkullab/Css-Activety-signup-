import Input from "../Input/Input";
import { BiLockOpenAlt } from "react-icons/bi";
import { FaGoogle } from "react-icons/fa";
import Button from "../Button/Button";
import "./Form.css";

const Form = () => {
  return (
    <>
      <form>
        <label htmlFor="em" className="label">
          E-mail
        </label>
        <div className="input-holder">
          <Input type="email" id="em" placeholder="name@mail.com" />
          <span className="icon at">@</span>
        </div>
        <label htmlFor="pass" className="label">
          Password
        </label>
        <div className="input-holder">
          <Input
            type="password"
            id="pass"
            placeholder="6+ characters, 1 Capital letter"
          />
          <BiLockOpenAlt className="icon" />
        </div>

        <Button className="btn login-btn submit" type="submit">
          Create an account
        </Button>
        <Button className="btn login-btn sec-login" type="button">
          <FaGoogle className="google" /> Sign up with Google
        </Button>
      </form>
    </>
  );
};
export default Form;
