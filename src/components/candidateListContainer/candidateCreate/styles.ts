import styled from "styled-components";
import Button from "../../button";

export const Container = styled.div`
  position: relative;

  width: 450px;
  height: 550px;
  background: #c4c4c4;

  border-radius: 10px;
  border: 0;

  Switch {
    color: black;
    font-size: 50px;
  }
`;

export const InputContainer = styled.div`
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

export const CreateButton = styled(Button)`
  align-self: flex-start;
  right: 16px;
  top: 0;
  position: absolute;

  width: 149px;
  height: 44px;
`;

export const CancelButton = styled(Button)`
  align-self: flex-start;
  left: 16px;
  top: 0;
  position: absolute;

  width: 54px;
  height: 44px;
`;

export const FormContainer = styled.div`
  width: 420px;
  height: 470px;

  background: transparent;

  margin-left: 15px;
  margin-top: 76px;

  align-content: center;

  display: flex;
  flex-direction: column;

  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const CheckboxContainer = styled.div`
  width: 420px;
  height: 200px;

  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
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

export const SwitchContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-right: 10px;
  margin-left: 10px;

  p {
    margin-left: 3px;
  }
`;
