import React from "react";
import { useAppContext } from "../../contexts/AppProvider";

const HomeDashboard = () => {
  const { user } = useAppContext();
  return <div>HomeDashboard</div>;
};

export default HomeDashboard;
