import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputComp = styled.input`
  width: 270px;
  border: none;
  border-bottom: 1px solid #999;
  padding: 6px 30px;
  outline: none;
  &:focus {
    border-bottom: 1px solid #000;
  }
`;

export const iconStyles = css`
  position: absolute;
`;
