import styled, { css } from "styled-components";

import Tooltip from "../tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #6f6f6e;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 3px solid #585858;
  color: #bebdbd;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.hasError &&
    css`
      border: 3px solid #ff0000;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border: 3px solid #009ee2;
      color: #009ee2;
    `}


  ${(props) =>
    props.isFilled &&
    css`
      color: #009ee2;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #fff;

    &::placeholder {
      color: #bebdbd;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #ff0000;
    color: #fff;

    &::before {
      border-color: #ff0000 transparent;
    }
  }
`;
