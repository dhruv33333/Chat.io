import React from "react";

// assets
import { FaUser } from "react-icons/fa";
import { GrImage } from "react-icons/gr";
import { MdEmail, MdLock, MdOutlineLock } from "react-icons/md";

// components
import { Button, useToast } from "@chakra-ui/react";
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
  isLoading,
  setLoading,
  setPic,
}) => {
  const toast = useToast();

  const handleLoginInfoChange = (e, key) => {
    const info = { ...loginInfo };
    info[key] = e.target.value;
    setLoginInfo(info);
  };

  const handleRegisterInfoChange = (e, key) => {
    const info = { ...registerInfo };
    info[key] = e.target.value;
    setRegisterInfo(info);
  };

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat.io");
      data.append("cloud_name", "dhruvn");
      fetch("https://api.cloudinary.com/v1_1/dhruvn/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image !",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
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
          value={loginInfo.email}
        />
        <Input
          type="password"
          placeholder="Password"
          Icon={MdLock}
          onChange={(e) => handleLoginInfoChange(e, "password")}
          value={loginInfo.password}
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
          value={registerInfo.name}
        />
        <Input
          type="email"
          placeholder="Your Email"
          Icon={MdEmail}
          onChange={(e) => handleRegisterInfoChange(e, "email")}
          value={registerInfo.email}
        />
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          Icon={GrImage}
          placeholder="hi"
          onChange={(e) => postDetails(e.target.files[0])}
        />
        <Input
          type="password"
          placeholder="Password"
          Icon={MdLock}
          onChange={(e) => handleRegisterInfoChange(e, "password")}
          value={registerInfo.password}
        />
        <Input
          type="password"
          placeholder="Repeat your password"
          Icon={MdOutlineLock}
          onChange={(e) => handleRegisterInfoChange(e, "cpassword")}
          value={registerInfo.cpassword}
        />
      </InputWrap>
    );
  }

  return (
    <div>
      {form}
      <Button
        colorScheme="blue"
        isLoading={isLoading}
        onClick={selectedTab === "login" ? handleLogin : handleRegister}
        mt={4}
        size="md"
        p="20px 40px"
      >
        {selectedTab === "login" ? "Log in" : "Register"}
      </Button>
    </div>
  );
};

export default Form;
