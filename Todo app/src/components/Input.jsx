import React from "react";
import { useState } from "react";

const Input = (props) => {
  const [inputVal, setInputVal] = useState("");
  const handleInputData = () => {
    props.addToList(inputVal);
  };
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleInputData}>Add</button>
    </div>
  );
};

export default Input;
