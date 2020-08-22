import styled from "styled-components";

interface TitleProps {
  readonly action: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: var(--color-primary);
    font: bold 5.5rem sans-serif;

    text-shadow: 5px 8px 5px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 700px) {
    h1 {
      font: bold 11rem sans-serif;
    }
  }
`;

export const Action = styled.b<TitleProps>`
  color: ${(props) =>
    props.action === "Work Time !!!"
      ? "var(--color-secondary)"
      : "var(--color-secondary-title)"};
  font: bold 1.5rem sans-serif;
  margin-top: 1rem;

  @media (min-width: 700px) {
    font: bold 3rem sans-serif;
  }
`;
