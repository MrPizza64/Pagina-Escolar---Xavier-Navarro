import styled from "styled-components";
import { TextMedium } from "../Utilities/Texts";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ButtonContainer = styled.div`
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ children, onClick = () => {} }) => {
  return (
    <ButtonContainer onClick={onClick}>
      <TextMedium>{children}</TextMedium>
    </ButtonContainer>
  );
};

export default Button;
