import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  font-size: ${(props) => props.fontSize};
  margin-bottom: 16px;
`;

export const ImgLogo = styled.img`
  position: absolute;
  top: 45px;
  left: 88px;
`;
