import React, { useState } from "react";
import Button from "./compoents/buttons";
import "./App.css";
import Display from "./compoents/display";

const App=()=>{
  const [data, setData]=useState("");
  const [items, setItems]=useState([]);
  const itemlist=()=>{
     setItems((olditm)=>{
       return[...olditm,data];
     });
     setData("");
  };
  return(
    <>
    <div className="main-div">
      <div className="inner-div">
        <h1 className="heading">TO DO LIST</h1>
        <input type="text" placeholder="add some items" value={data} onChange={e=>setData(e.target.value)}></input>
        <Button type="Primary" label="Add" onClick={itemlist}/>
        <ol>
          {items.map((itemValue)=>{
            return <Display itemVal={itemValue}/>
          })}
        </ol>
      </div>
    </div>
    </>

  );
};
export default App;
