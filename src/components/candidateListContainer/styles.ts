import styled from "styled-components";
import Button from "../button";

export const Container = styled.div`
  position: relative;

  width: 450px;
  height: 550px;
  background: #c4c4c4;

  border-radius: 10px;
  border: 0;
`;

export const CreateButton = styled(Button)`
  align-self: flex-start;
  right: 16px;
  top: 0;
  position: absolute;

  width: 149px;
  height: 44px;
`;

export const FilterButton = styled(Button)`
  color: #fff;

  align-self: flex-start;
  left: 16px;
  top: 0;
  position: absolute;

  width: 54px;
  height: 44px;

  padding: 0;

  svg {
    size: 50px;
    margin-top: 3px;
  }
`;

export const ListContainer = styled.div`
  width: 420px;
  height: 470px;

  background: transparent;

  overflow-y: scroll;

  margin-left: 15px;
  margin-top: 76px;

  align-content: center;

  display: flex;
  flex-direction: column;

  animation: fadein 0.4s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
