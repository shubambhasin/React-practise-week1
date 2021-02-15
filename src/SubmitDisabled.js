import React, { useState } from "react";

const SubmitDisabled = () => {
  const [data, setData] = useState({
    input1: "",
    input2: ""
  });
  const [result, setResult] = useState("");
  const [disabled, setDisbled] = useState(false);

  const checkMatch = (e) => {
    e.preventDefault();
    if (data.input1 === "") {
      alert("password cant be empty");
    } else if (data.input2 === "") {
      alert("password cant be empty");
    } else {
      setResult(
        data.input1 === data.input2
          ? "Password matched"
          : "Password do not match"
      );
    }
  };

  const handleInput1 = (e) => {
    setData((data) => ({
      ...data,
      input1: e.target.value
    }));
  };

  const handleInput2 = (e) => {
    console.log(e.target.value);
    if (data.input1 === e.target.value) {
      setData((data) => ({
        ...data,
        input2: e.target.value
      }));
    } else {
      setDisbled(!disabled);
    }
  };

  return (
    <div>
      <div className="password-container" style={{width: "250px"}}>
        <span style={{ marginLeft: "0.5rem", color:"red" }}>
          Submit will be disabled if password dont match{" "}
        </span>
        <form onSubmit={checkMatch}>
          <input type="" placeholder="Enter password" onChange={handleInput1} />

          <input
            type=""
            placeholder="Repeat Password"
            onChange={handleInput2}
          />
          <br />
          <button disabled={disabled} type="submit">
            Check
          </button>
          <span>
            <small>{result}</small>
          </span>
        </form>
      </div>
    </div>
  );
};

export default SubmitDisabled;
