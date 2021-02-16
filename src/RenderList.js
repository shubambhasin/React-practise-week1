import React, { useState } from "react";

const Data = [
  {
    item: "Book 1"
  },
  {
    item: "Book 2"
  },
  {
    item: "Book 3"
  },
  {
    item: "Book 4"
  },
  {
    item: "Book 5"
  },
  {
    item: "Book 6"
  }
];

const RenderList = () => {

  const [like, SetLike] = useState(0)

  const Like = () => {
    SetLike(like => like +1)
  }
  return <div>
<div>{Data.map((data, index) => {
  return(
    <div key={index}>{Data.item} <button onClick = {Like}>{like}</button></div>
  )
})}</div>
  </div>;
};
export default RenderList;
