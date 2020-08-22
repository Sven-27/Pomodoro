import React, { useState } from "react";
import GlobalStyle from "../styles/global";

import Timer from "../components/Timer";

import { Container, ButtonContainer } from "../styles";
import Button from "../components/Button";

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
