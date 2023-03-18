import React from "react";

// styles
import { InputComp } from "./styled";

const Input = ({ Icon, placeholder, styles, type, onChange }) => {
  return (
    <>
      {Icon && <Icon style={{ position: "absolute", marginTop: "4px" }} />}
      <InputComp
        type={type || "text"}
        placeholder={placeholder || ""}
        onChange={(e) => onChange(e)}
        style={styles}
      />
    </>
  );
};

export default Input;
