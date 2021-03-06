import { Container } from "./styles";
import { Text, ImgLogo } from "./styles";
import logoMini from "../../assets/logo-mini.png";

export default function Success(props) {
  return (
    <Container>
      <ImgLogo src={logoMini} alt=""></ImgLogo>

      <Text fontSize={"36px"}>PARABÉNS!</Text>
      <Text fontSize={"22px"}>Você não esqueceu de nenhum flashcard!</Text>
    </Container>
  );
}
