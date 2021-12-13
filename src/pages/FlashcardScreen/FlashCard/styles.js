import styled from "styled-components";

export const ContainerFront = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 392px;
  height: 575.75px;
  background-color: #ffffff;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  position: relative;
`;
export const ContainerBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 392px;
  height: 575.75px;
  background-color: #ffffff;
  box-shadow: ${(props) => `0px 8px 24px ${props.shadowColor}33`};
  border-radius: 12px;
  position: relative;
  border: ${(props) => `3px solid ${props.borderColor}`};
`;

export const ButtonFront = styled.button`
  all: unset;
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const ButtonBack = styled.button`
  all: unset;
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: ${(props) => (props.isAnswered ? "flex" : "none")};
`;

export const TopCounter = styled.h1`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
  font-weight: normal;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  margin-top: 20px;

  color: #000000;
`;

export const MainText = styled.h1`
  word-wrap: break-word;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;

  color: #000000;
`;
export const Text = styled.h1`
  align-items: center;
  width: 90%;
  justify-content: center;
  word-wrap: break-word;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;

  color: #000000;
`;

export const Img = styled.img``;
export const ImgLogo = styled.img`
  position: absolute;
  top: 45px;
  left: 88px;
`;

export const Footer = styled.footer`
  display: flex;
  margin-bottom: 20px;
  gap: 15px;
  height: 48px;
`;

export const AnswerButton = styled.div`
  width: 65px;
  height: 48px;
  border: ${(props) => `3px solid ${props.borderColor}`};
  box-sizing: border-box;
  border-radius: 12px;

  display: flex;
  display: ${(props) => (props.isAnswered ? "none" : "flex")};

  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #000000;
`;
