import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { Button } from "./styles";

import logo from "../../assets/logo.png";

export default function HomeScreen() {
  let navigate = useNavigate();

  return (
    <Container>
      <img src={logo} alt="" />
      <Button
        onClick={() => {
          navigate("/flashcard");
        }}
        data-identifier="start-zap-recall"
      >
        Praticar React
      </Button>
    </Container>
  );
}
