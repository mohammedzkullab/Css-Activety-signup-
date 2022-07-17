import { IoMdArrowDropdown } from "react-icons/io";
import "./Select.css";

import { useState } from "react";
const Select = () => {
  const [isDroped, setDroped] = useState(false);
  return (
    <div className="select-wrapper">
      <button
        className="drop-trigger"
        type="button"
        onClick={() => {
          setDroped(!isDroped);
        }}
      > English (US) <IoMdArrowDropdown /> </button>
      {isDroped ? (
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>Arabic</li>
        </ul>
      ) :  ("")}
    </div>
  );
};
export default Select;
