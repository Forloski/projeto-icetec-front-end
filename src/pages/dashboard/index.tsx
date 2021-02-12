import React, { useCallback, useRef } from "react";

import { FiPower } from "react-icons/fi";

import { Container, Header, HeaderContent, Profile, Content } from "./styles";
import CandidateListContainer from "../../components/candidateListContainer";
// import CandidateCreate from "../../components/candidateListContainer/candidateCreate";
import logo from "../../assets/logo_icetec.svg";
import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logo} alt="icetec" />
          <Profile>
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <CandidateListContainer />
      </Content>
    </Container>
  );
};

export default Dashboard;
