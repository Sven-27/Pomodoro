import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps {
  isTimming: boolean;
  action: Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ isTimming, action }) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (isTimming) return setTitle("Stop");

    setTitle("Start");
  }, [isTimming]);

  return (
    <ButtonContainer
      title={title}
      onClick={() => (!isTimming ? action(true) : action(false))}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
