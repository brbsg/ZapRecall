import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ContainerFront,
  ContainerBack,
  ButtonFront,
  ButtonBack,
  Img,
  Text,
  TopCounter,
  Title,
  MainText,
  AnswerButton,
  Footer,
  ImgLogo,
} from "./styles";
import ReactCardFlip from "react-card-flip";

import turn from "../../../assets/turn.png";
import logoMini from "../../../assets/logo-mini.png";

export default function Flashcard(props) {
  let navigate = useNavigate();

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [borderColor, setBorderColor] = useState("#00000000");
  const [shadowColor, setShadowColor] = useState("#000000");

  const [fail, setFail] = useState(0);

  const [counter, setCounter] = useState(0);

  const handleClick = (borderColor, buttonName) => {
    setIsAnswered(true);
    setBorderColor(borderColor);
    setShadowColor(borderColor);

    if (buttonName == "Não lembrei") setFail(fail + 1);

    if (counter < props.deck.length - 1) {
      setCounter(counter + 1);
    } else if (fail === 0) {
      navigate("/success");
    } else if (fail > 0) {
      navigate("/fail");
    }
  };

  return (
    <>
      <ImgLogo src={logoMini} alt=""></ImgLogo>

      <ReactCardFlip isFlipped={isFlipped}>
        <ContainerFront>
          <TopCounter data-identifier="counter">1/8</TopCounter>
          <MainText>{props.deck[counter].question}</MainText>

          <ButtonFront
            onClick={() => (
              setIsFlipped(!isFlipped),
              setBorderColor("#00000000"),
              setShadowColor("#000000"),
              setIsAnswered(false)
            )}
            data-identifier="arrow"
          >
            <Img src={turn} alt="" />
          </ButtonFront>
        </ContainerFront>

        <ContainerBack borderColor={borderColor} shadowColor={shadowColor}>
          <TopCounter>1/8</TopCounter>
          <Title>{props.deck[0].question}</Title>

          <Text>{props.deck[0].answer}</Text>

          <Footer>
            <AnswerButton
              onClick={() => handleClick("#000000", "Aprendi agora")}
              borderColor={"#000"}
              isAnswered={isAnswered}
            >
              Aprendi agora
            </AnswerButton>
            <AnswerButton
              onClick={() => handleClick("#F74848", "Não lembrei")}
              borderColor={"#F74848"}
              isAnswered={isAnswered}
            >
              Não lembrei
            </AnswerButton>
            <AnswerButton
              onClick={() => handleClick("#62DB38", "Lembrei com esforço")}
              borderColor={"#62DB38"}
              isAnswered={isAnswered}
            >
              Lembrei com esforço
            </AnswerButton>
            <AnswerButton
              onClick={() => handleClick("#FFEF61", "Zap!")}
              borderColor={"#FFEF61"}
              isAnswered={isAnswered}
            >
              Zap!
            </AnswerButton>
          </Footer>
          <ButtonBack
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
            isAnswered={isAnswered}
          >
            <Img src={turn} alt="" />
          </ButtonBack>
        </ContainerBack>
      </ReactCardFlip>
    </>
  );
}
