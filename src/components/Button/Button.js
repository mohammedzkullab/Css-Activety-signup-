import "./Button.css";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick} {...props}>
      {props.children}
    </button>
  );
};
export default Button;
