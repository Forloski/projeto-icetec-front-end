import React from "react";
import { Circle, Check, Container } from "./styles";

type IProps = {
  checked: boolean;
  onClick?: () => void;
  className?: string;
};

const Switch: React.FC<IProps> = ({
  checked,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  className = "",
}) => {
  return (
    <Container
      className={checked ? `checked ${className}` : className}
      onClick={onClick}
    >
      <Check />
      <Circle />
    </Container>
  );
};

export default Switch;
