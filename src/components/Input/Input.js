const Input = ({type , id , placeholder ,...props})=>{
    return (
        <input
            className="input"
            type={type}
            id={id}
            placeholder={placeholder}
          />
    );
}
export default Input;