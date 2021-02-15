import React, { useState } from "react";

const CharCount = () => {
  const [charCount, setCharCount] = useState(0);
  const count = (e) => {   

setCharCount((e.target.value).length)
  }
  return (
    <div>
      <div className="tweet-container"  style={{width: "250px"}}>
        <label>CharCount :</label>
        <span>
          <strong>{charCount}</strong>
        </span>
        <br />
        <textarea onChange={count}  style={{width: "210px"}} />
      </div>
    </div>
  );
};

export default CharCount;
