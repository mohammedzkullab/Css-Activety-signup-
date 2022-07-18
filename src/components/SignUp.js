/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "./Container/Container";
import Select from "./Select/Select";
import Illustrate from "../undraw_team_up.svg";
import Form from "./Form/Form";
import "./SignUp.css";
const SignUp = () => {
  return (
    <>
      <div className="column left-col">
        <Container>
          <p className="logo">
            <a href="#">zoho.</a>
          </p>
          <p className="logo-p">
            lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
            lorem ipsumlorem
          </p>
          <img src={Illustrate} alt="illustrate" className="illustrate" />
        </Container>
      </div>
      
      <div className="column">
        <Container className="cont">
          <Select />
          <div className="form-head">
            <h4 className="gray-color">START FOR FREE</h4>
            <h1>Sign up to Zoho.</h1>
            <p className="gray-color">
              Already A Member ? <a href="#">Log in</a>
            </p>
          </div>
          <Form />
          <div className="gray-color small">
            <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
            <p>
              lorem ipsum <a>lorem ipsum</a> lorem ipsum <a>lorem ipsum</a>{" "}
              lorem ipsum lorem ipsum lorem ipsum
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};
export default SignUp;
