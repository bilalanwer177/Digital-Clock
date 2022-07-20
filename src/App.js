import React, { useState } from "react";
const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval(UpdateTime, 1000)
} 
  return (
    <>
      <div className="container" >
        <div className="heading">
          <h1> Current Time </h1>
        </div>

        <h1 className="text" > {ctime} </h1>
      </div>
    </>
  )
export default App;