import React, { useCallback } from "react";
import { Container } from "./styles";
import defaultAvatar from "../../../assets/default-avatar.png";
import { ICandidate, useCandidates } from "../../../hooks/candidates";
import { useDashboardScreen } from "../../../hooks/dashboardScreen";

const CandidateListCard: React.FC<ICandidate> = (candidate) => {
  const { storeCandidate } = useCandidates();
  const { storeDashboardScreen } = useDashboardScreen();

  const handleOnClick = useCallback(() => {
    storeCandidate(candidate);
    storeDashboardScreen(4);
  }, [candidate, storeCandidate, storeDashboardScreen]);

  return (
    <Container onClick={handleOnClick}>
      <img src={defaultAvatar} alt="defaultAvatar" />
      <div>
        <p id="candidateNameTextField">{candidate.name}</p>
        <p id="candidateEmailTextField">{candidate.email}</p>
        <p id="candiodateLikedinTextField">{candidate.linkedinUrl}</p>
      </div>
    </Container>
  );
};

export default CandidateListCard;
