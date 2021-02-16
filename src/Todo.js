import React, { useState } from "react";
import "./styles.css";
const Todo = () => {
  const [data, setData] = useState([]);
  const [strike, setStrike] = useState("none");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        todo: input,
        id: data.length
      }
    ]);
  };
  const crossTodo = (e) => {
    setStrike("line-through");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };




  
  function randomFun(data) {
    return data + 5;
  }

  randomFun(5);









  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter TODO" onChange={handleChange} />
      </form>
      <ul>
        {data.map((data, index) => {
          return (
            <li
              style={{
                textDecoration: `${strike}`,
                border: "1px solid grey",
                padding: "1rem",
                listStyleType: "none"
              }}
              key={index}
              onClick={crossTodo}
            >
              {data.todo} <span>| Entry no. {data.id + 1}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
