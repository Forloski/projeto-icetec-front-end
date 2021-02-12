import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #d5f1fc;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: black;
      width: 30px;
      height: 30px;

      &:hover {
        color: red;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
  }

  span {
    color: #9c9b9b;
  }

  strong {
    color: #009ee2;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
