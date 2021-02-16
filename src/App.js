import { useState } from "react";
import CharCount from "./CharCount";
import Counter from "./Counter";
import Passwordmatch from "./PasswordMatch";
import RenderList from "./RenderList";
import ShowPassword from "./ShowPassword";
import "./styles.css";
import SubmitDisabled from "./SubmitDisabled";
import Todo from "./Todo";


export default function App() {

  const [viewMode, setViewMode] = useState("light")
  
  const toggleMode = () => {

    if(viewMode ==="light")
    {
      setViewMode("dark")
    }
    else
    {
      setViewMode("light")
    }
  }

  return (
    <div className={`App ${viewMode}`}>

      <button className="view-toggle" onClick={toggleMode}>Right now: {viewMode.toUpperCase()} Mode</button> 
      <Counter />
      <br />
      {/* <Card
        image="https://www.shopperwear.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/w/i/winter-new-fashion-coat-mens-trench-coat-slim-fit-pea-coat-warm-jacket-wool-blends-overcoat-long-casual-men-clothing-extra-image-1.jpg"
        name="Long coat with big name"
        smallDetail="random details that brags about the product"
        price="Rs 9999"
        discount="10%"
      /> */}
      <br />

      {/* character counter (Twitter) */}
      <CharCount />
      {/* *******password match******** */}
      <Passwordmatch/>
{/* ***************if password dont match click disabled*************** */}
<SubmitDisabled/>
{/* **********showPassword******************** */}
<ShowPassword/>
{/* ************RenderList******************** */}
<RenderList/>
{/* *************TODO*********** */}
<Todo/>

    </div>
  );
}
