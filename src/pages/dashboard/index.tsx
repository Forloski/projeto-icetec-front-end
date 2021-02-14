import React, { useEffect } from "react";

import { FiPower } from "react-icons/fi";

import { Container, Header, HeaderContent, Profile, Content } from "./styles";
import CandidateListContainer from "../../components/candidateListContainer";
import CandidateCreate from "../../components/candidateListContainer/candidateCreate";
import CandidateListFilter from "../../components/candidateListContainer/candidateListFilter";
import CandidateEdit from "../../components/candidateListContainer/candidateEdit";
import logo from "../../assets/logo_icetec.svg";
import { useAuth } from "../../hooks/auth";
import { useDashboardScreen } from "../../hooks/dashboardScreen";

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { dashboardScreenState, storeDashboardScreen } = useDashboardScreen();

  useEffect(() => {
    storeDashboardScreen(1);
  }, [storeDashboardScreen]);

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
        {dashboardScreenState === 1 ? <CandidateListContainer /> : null}
        {dashboardScreenState === 2 ? <CandidateCreate /> : null}
        {dashboardScreenState === 3 ? <CandidateListFilter /> : null}
        {dashboardScreenState === 4 ? <CandidateEdit /> : null}
      </Content>
    </Container>
  );
};

export default Dashboard;
