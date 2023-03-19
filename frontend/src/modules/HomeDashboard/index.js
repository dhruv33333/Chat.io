import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// context
import { useAppContext } from "../../contexts/AppProvider";

// components
import NavBar from "./Navbar";

const HomeDashboard = () => {
  const history = useHistory();

  const { user } = useAppContext();

  return (
    <>
      <NavBar />
    </>
  );
};

export default HomeDashboard;
