import { Container } from "./styles";
import { Text, ImgLogo } from "./styles";

import logoMini from "../../assets/logo-mini.png";

export default function Fail(props) {
  return (
    <Container>
      <ImgLogo src={logoMini} alt=""></ImgLogo>

      <Text fontSize={"36px"}>PUTZ..</Text>
      <Text fontSize={"22px"}>
        Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!
      </Text>
    </Container>
  );
}
