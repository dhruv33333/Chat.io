import React, { useState } from "react";

// assets
import LoginImg from "../../assets/login.jpg";
import RegisterImg from "../../assets/register.jpg";

// components
import Form from "./Form";

// styles
import {
  LeftSection,
  RightSection,
  Wrapper,
  Tabs,
  InnerWrap,
  Tab,
  Header,
} from "./styled";

const Login = () => {
  const [selectedTab, setSelectedTab] = useState("login");

  return (
    <>
      <Header>Chat.io</Header>
      <Wrapper>
        <Tabs>
          <Tab
            selected={selectedTab === "login"}
            onClick={() => setSelectedTab("login")}
          >
            Login
          </Tab>
          <Tab
            selected={selectedTab === "register"}
            onClick={() => setSelectedTab("register")}
          >
            Sign Up
          </Tab>
        </Tabs>
        <InnerWrap>
          <LeftSection>
            <h1>{selectedTab === "login" ? "Login" : "Sign Up"}</h1>
            <Form selectedTab={selectedTab} />
          </LeftSection>
          <RightSection>
            <img
              src={selectedTab === "login" ? LoginImg : RegisterImg}
              alt="login-register-img"
            />
            {selectedTab === "login" && (
              <button>Get guest user credentials</button>
            )}
          </RightSection>
        </InnerWrap>
      </Wrapper>
    </>
  );
};

export default Login;
