import React, { useState } from "react";

// assets
import LoginImg from "../../assets/login.jpg";
import RegisterImg from "../../assets/register.jpg";

// components
import Form from "./Form";
import { useToast } from "@chakra-ui/react";

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
  const toast = useToast();
  const [selectedTab, setSelectedTab] = useState("login");
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  //TODO- Add profile upload logic
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleLogin = async () => {
    const { email, password } = loginInfo;
    if (!email || !password) {
      toast({
        title: "Please enter all the details!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }

    // const res = await fetch()
  };

  const handleRegister = () => {
    const { name, email, password, cpassword } = registerInfo;

    if (!name || !email || !password || !cpassword) {
      toast({
        title: "Please enter all the details!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }

    if (password !== cpassword) {
      toast({
        title: "Both password don't match!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

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
            <Form
              selectedTab={selectedTab}
              loginInfo={loginInfo}
              setLoginInfo={setLoginInfo}
              registerInfo={registerInfo}
              setRegisterInfo={setRegisterInfo}
              handleLogin={handleLogin}
              handleRegister={handleRegister}
            />
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
