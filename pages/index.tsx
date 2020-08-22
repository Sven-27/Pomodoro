import React, { useState } from "react";
import GlobalStyle from "../styles/global";

import Timer from "../components/Timer";
import Button from "../components/Button";

import { Container, ButtonContainer } from "../styles";

const App: React.FC = () => {
  const [isTimming, setIsTimming] = useState(false);

  return (
    <>
      <Container>
        <Timer isTimming={isTimming} />

        <ButtonContainer>
          <Button action={setIsTimming} isTimming={isTimming} />
        </ButtonContainer>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
