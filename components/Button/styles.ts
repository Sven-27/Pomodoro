import styled from "styled-components";

interface ButtonProps {
  readonly title: string;
}

export const ButtonContainer = styled.b<ButtonProps>`
  background: transparent;

  border: none;
  padding: 10px;
  border-radius: 6px;
  margin-top: 20px;

  font: bold 2rem sans-serif;

  cursor: pointer;
  color: white;
  transition: all 0.2s;

  :hover {
    text-shadow: 1px 5px 3px rgba(0, 0, 0, 0.5);
  }

  :active {
    transition: color 0s;
    color: ${(props) =>
      props.title === "Start"
        ? "var(--color-secondary-title)"
        : "var(--color-secondary)"};
  }

  @media (min-width: 700px) {
    font: bold 3rem sans-serif;
  }
`;
