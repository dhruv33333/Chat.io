import React from "react";
import { InputWrap, SubmitBtn } from "./styled";

const Form = ({ selectedTab }) => {
  let form;
  switch (selectedTab) {
    case "login": {
      form = (
        <InputWrap>
          <input type="email" placeholder="Your email" />
          <input type="password" placeholder="Password" />
        </InputWrap>
      );
    }
    case "register": {
      form = (
        <InputWrap>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat your password" />
        </InputWrap>
      );
    }
    default: {
    }
  }
  return (
    <div>
      {form}
      <SubmitBtn>{selectedTab === "login" ? "Log in" : "Register"}</SubmitBtn>
    </div>
  );
};

export default Form;
