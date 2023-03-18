import React from "react";

// assets
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLock, MdOutlineLock } from "react-icons/md";

// components
import { Input } from "../../components";

// styles
import { InputWrap, SubmitBtn } from "./styled";

const Form = ({
  selectedTab,
  loginInfo,
  setLoginInfo,
  registerInfo,
  setRegisterInfo,
  handleLogin,
  handleRegister,
}) => {
  const handleLoginInfoChange = (e, key) => {
    const info = loginInfo;
    info[key] = e.target.value;
    setLoginInfo(info);
  };

  const handleRegisterInfoChange = (e, key) => {
    const info = registerInfo;
    info[key] = e.target.value;
    setRegisterInfo(info);
  };

  let form;

  if (selectedTab === "login") {
    form = (
      <InputWrap>
        <Input
          type="email"
          placeholder="Your email"
          Icon={MdEmail}
          onChange={(e) => handleLoginInfoChange(e, "email")}
        />
        <Input
          type="password"
          placeholder="Password"
          Icon={MdLock}
          onChange={(e) => handleLoginInfoChange(e, "password")}
        />
      </InputWrap>
    );
  } else {
    form = (
      <InputWrap>
        <Input
          type="text"
          placeholder="Your Name"
          Icon={FaUser}
          onChange={(e) => handleRegisterInfoChange(e, "name")}
        />
        <Input
          type="email"
          placeholder="Your Email"
          Icon={MdEmail}
          onChange={(e) => handleRegisterInfoChange(e, "email")}
        />
        <Input
          type="password"
          placeholder="Password"
          Icon={MdLock}
          onChange={(e) => handleRegisterInfoChange(e, "password")}
        />
        <Input
          type="password"
          placeholder="Repeat your password"
          Icon={MdOutlineLock}
          onChange={(e) => handleRegisterInfoChange(e, "cpassword")}
        />
      </InputWrap>
    );
  }

  return (
    <div>
      {form}
      <SubmitBtn
        onClick={selectedTab === "login" ? handleLogin : handleRegister}
      >
        {selectedTab === "login" ? "Log in" : "Register"}
      </SubmitBtn>
    </div>
  );
};

export default Form;
