/* eslint-disable jsx-a11y/anchor-is-valid */
import Column from "../layout/Column";
import Illustrate from "../../undraw_team_up.svg";
import "./LeftCol.css";
import Container from "../layout/Container";
const LeftCol = () => {
  return (
    <Column style={{ background: "rgba(0, 108, 255, 0.1)" }}>
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
    </Column>
  );
};
export default LeftCol;
