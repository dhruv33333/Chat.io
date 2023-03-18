import React from "react";

// assets
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock, MdOutlineLock } from "react-icons/md";

// components
import { Input } from "../../components";

// styles
import { InputWrap, SubmitBtn } from "./styled";

const Form = ({ selectedTab }) => {
  let form;
  switch (selectedTab) {
    case "login": {
      form = (
        <InputWrap>
          <Input type="email" placeholder="Your email" Icon={MdEmail} />
          <Input type="password" placeholder="Password" Icon={MdLock} />
        </InputWrap>
      );
      break;
    }
    case "register": {
      form = (
        <InputWrap>
          <Input type="text" placeholder="Your Name" Icon={FaUser} />
          <Input type="email" placeholder="Your Email" Icon={MdEmail} />
          <Input type="password" placeholder="Password" Icon={MdLock} />
          <Input
            type="password"
            placeholder="Repeat your password"
            Icon={MdOutlineLock}
          />
        </InputWrap>
      );
      break;
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
