import React from "react";
import {useState, useEffect} from 'react';1
import "./style.css";

export default function App() {
  
  const [count, setCount] = useState(100)

  useEffect(()=>{
    console.log(count)
  },[count==95])

  return (
    <div>
      <h1>Hello Functional Component</h1>
      <p>using useState() and useEffect()</p>
      
      <h3>{count}</h3>
  
      <button onClick={()=>{setCount(count+1)}}>increament</button>
      <button onClick={()=>{setCount(count-1)}}>deccreament</button>

    </div>

  );
}
