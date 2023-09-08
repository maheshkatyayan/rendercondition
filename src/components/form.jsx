import React from "react";
import Input from "./input";
function form() {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="placeholder" />
      <button type="submit">Login</button>
    </form>
  );
}
export default form;
