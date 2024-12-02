import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div style={{ backgroundColor: "pink", padding: "10px" ,width:"600px"}}>
      {toggle && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          accusantium iure cupiditate doloremque fuga aut quo voluptatibus
          quaerat atque! Laborum!
        </p>
      )}
      <button onClick={()=>{
        setToggle(!toggle);
      }}>{toggle ? "Hide" : "Show"}</button>
    </div>
  );
}
