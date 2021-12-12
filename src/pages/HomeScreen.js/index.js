import { Container } from "./styles";
import { Footer } from "./styles";

import logo from "../../assets/logo.png";

export default function HomeScreen() {
  return (
    <Container>
      <img src={logo} alt="" />
      <Footer>Praticar React</Footer>
    </Container>
  );
}
