import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
  background: #0891d6;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  width: 100%;
  font-weight: 650;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, `#0891d6`)};
  }
`;
