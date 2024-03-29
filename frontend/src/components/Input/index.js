import React from "react";

// styles
import { InputComp, InputWrapper } from "./styled";

const Input = ({ Icon, placeholder, styles, type, onChange, value }) => {
  return (
    <InputWrapper>
      {Icon && <Icon style={{ position: "absolute", marginTop: "10px" }} />}
      <InputComp
        type={type || "text"}
        placeholder={placeholder || ""}
        onChange={(e) => onChange(e)}
        style={styles}
        value={value}
      />
    </InputWrapper>
  );
};

export default Input;
