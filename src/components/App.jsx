import React from "react";

import Form from "./form";
var islogin = true;

function App() {
  return (
    <div className="container">
      {islogin === true ? <h1>Hello</h1> : <Form />}
    </div>
  );
}

export default App;
