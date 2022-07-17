/* eslint-disable jsx-a11y/anchor-is-valid */
import Column from "../layout/Column";
import Container from "../layout/Container";
import Select from "./Select";
import Form from "./Form";
import "./RightCol.css";
const RightCol = () => {
  return (
    <Column>
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
            lorem ipsum <a>lorem ipsum</a> lorem ipsum <a>lorem ipsum</a> lorem
            ipsum lorem ipsum lorem ipsum
          </p>
        </div>
      </Container>
    </Column>
  );
};
export default RightCol;
