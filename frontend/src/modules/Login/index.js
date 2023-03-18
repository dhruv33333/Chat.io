import React, { useState } from "react";

// assets
import LoginImg from "../../assets/login.jpg";
import RegisterImg from "../../assets/register.jpg";

// components
import Form from "./Form";

// styles
import {
  InputWrap,
  LeftSection,
  RightSection,
  SubmitBtn,
  Wrapper,
} from "./styled";

const Login = () => {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <Wrapper>
      <LeftSection>
        <h1>{selectedTab === "login" ? "Login" : "Sign Up"}</h1>
        <Form selectedTab={selectedTab} />
      </LeftSection>
      <RightSection>
        <img
          src={selectedTab === "login" ? LoginImg : RegisterImg}
          alt="login-register-img"
        />
        {selectedTab === "login" && <button>Get guest user credentials</button>}
      </RightSection>
    </Wrapper>
  );
};

export default Login;
