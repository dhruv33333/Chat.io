import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  box-shadow: 0 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  margin-top: 30vh;
  width: 70%;
  margin: auto;
  margin-top: 18vh;
  padding: 60px;
`;

// export const Container = styled.div`
//   display: flex;
// `;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    font-size: 36px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 20px;
  }
`;

export const SubmitBtn = styled.button`
  background: #6dabe4;
  color: #fff;
  padding: 15px 39px;
  border-radius: 5px;
  border: none;
  margin-top: 24px;
  cursor: pointer;
  &:hover {
    background: #5788b6;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
    height: auto;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  button {
    font-size: 14px;
    color: #222;
    border: none;
    text-decoration: underline;
    margin-top: 20px;
    background: transparent;
  }
`;
