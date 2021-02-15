import React, { useState } from "react";

const Passwordmatch = () => {
  const [data, setData] = useState({
    input1: "",
    input2: ""
  });
  const [result, setResult] = useState("");

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
    setData((data) => ({
      ...data,
      input2: e.target.value
    }));

    

  };
  return (
    <div>
      <div className="password-container"  style={{width: "250px"}}>
        <span style={{ marginLeft: "0.5rem" }}>Password Match test </span>
        <form onSubmit={checkMatch}>
          <input type="password" placeholder="Enter password" onChange={handleInput1} />

          <input type="password" placeholder="Repeat Password" onChange={handleInput2} />
          <br />
          <button type="submit">Check</button>
          <span><small>{result}</small></span>
        </form>
      </div>
    </div>
  );
};

export default Passwordmatch;
