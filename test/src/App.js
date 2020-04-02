import React from 'react';
import './App.css';
import Button from "./Button";
import Gradient from "./Gradient/gradient-index";

function App() {
  return (
      <main style={{width:"100vw",height:"100vh"}}>
          <Gradient/>
          {/**<div className="buttons">
          <Button>默认按钮</Button>
          <Button color="red">红色按钮</Button>
          <Button color="black">黑色按钮</Button>
          <Button type="secondary">默认按钮</Button>
          <Button color="red" type="secondary">红色按钮</Button>
          <Button color="black" type="secondary">黑色按钮</Button>
        </div>*/}
      </main>

  )
}

export default App;
