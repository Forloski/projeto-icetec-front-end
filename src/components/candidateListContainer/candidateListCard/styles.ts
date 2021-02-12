import styled from "styled-components";
import { shade } from "polished";
import Button from "../../button";

export const Container = styled(Button)`
  position: relative;
  display: flex;

  width: 98%;
  height: 100px;

  padding-right: 5px;

  background: #d5f1fc;
  color: #1e4475;

  border-radius: 10px;
  border: 0;

  div {
    width: 310px;
    margin-top: 5px;
  }

  &:hover {
    background: ${shade(0.2, `#d5f1fc`)};
  }

  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  p {
    text-align: left;
    padding-left: 23px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  #candidateNameTextField {
    font-size: 30px;
    padding-left: 15px;
    padding-top: 1px;
  }
`;
