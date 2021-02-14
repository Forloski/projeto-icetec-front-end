import React from "react";
import { useRouteMatch } from "react-router-dom";

import { FiPower } from "react-icons/fi";
import logo from "../../assets/logo_icetec.svg";

import { Container, Header, HeaderContent, Profile, Content } from "./styles";
import CandidateListContainer from "../../components/candidateListContainer";
import CandidateCreate from "../../components/candidateListContainer/candidateCreate";
import CandidateListFilter from "../../components/candidateListContainer/candidateListFilter";
import CandidateEdit from "../../components/candidateListContainer/candidateEdit";

import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  const match = useRouteMatch();

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
        {match.path === "/dashboard" ? <CandidateListContainer /> : null}
        {match.path === "/dashboard/create" ? <CandidateCreate /> : null}
        {match.path === "/dashboard/filter" ? <CandidateListFilter /> : null}
        {match.path === "/dashboard/candidate/:id" ? <CandidateEdit /> : null}
      </Content>
    </Container>
  );
};

export default Dashboard;
