import { useState } from "react";

const ShowPassword = () => {
  const [showPass1, setShowPass1] = useState("password");
  const [showPass2, setShowPass2] = useState("password");
  const [showBtn1, setShowBtn1] = useState("show");
  const [showBtn2, setShowBtn2] = useState("show");
  const togglePassword1 = (e) => {
    e.preventDefault();

    if (showPass1 === "password") {
      setShowPass1("text");
      setShowBtn1("hide");
    } else {
      setShowPass1("password");
      setShowBtn1("show");
    }
  };
  const togglePassword2 = (e) => {
    e.preventDefault();

    if (showPass2 === "password") {
      setShowPass2("text");
      setShowBtn2("hide");
    } else {
      setShowPass1("password");
      setShowBtn2("show");
    }
  };
  return (
    <div>
      <div className="password-container" style={{ width: "350px" }}>
        <span style={{ marginLeft: "0.5rem" }}>Show password </span>
        <form>
          <input type={showPass1} placeholder="Enter password" />
          <button onClick={togglePassword1}>{showBtn1}</button>

          <input type="password" placeholder="Repeat Password" />
          <button onClick={togglePassword2}>{showBtn2}</button>
          <br />
          <button type="submit">Reset</button>
        </form>
      </div>
    </div>
  );
};

export default ShowPassword;
