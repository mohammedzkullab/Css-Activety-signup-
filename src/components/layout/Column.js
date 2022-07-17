import "./Column.css";
const Column = (props) => {
  const w = "50%"
  return (
    <div className="Column" style={{ width : w , ...props.style}}>
      {props.children}
    </div>
  );
};
export default Column;
