import styled from "styled-components";
import CheckIcon from "../../assets/svg/Check";

export const Circle = styled.div`
  border-radius: 100%;
  width: 16px;
  height: 16px;
  position: absolute;
  left: 2px;
  top: 2px;
  background: #008ae0;
  transition: 0.5s;
`;

export const Check = styled(CheckIcon)`
  opacity: 0;
  transition: 0.5s;
  margin-left: 2px;
`;

export const Container = styled.div`
  height: 24px;
  width: 48px;
  border-radius: 24px;
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  background: #fafbfb;
  border: 2px solid #2d9cdb;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;

  &.checked {
    background: #008ae0;
    border-color: #008ae0;
    ${Check} {
      opacity: 1;
    }
    ${Circle} {
      background: #fafbfb;
      left: 26px;
    }
  }
`;
