import React, { useCallback } from "react";
import { Container } from "./styles";
import defaultAvatar from "../../../assets/default-avatar.png";
import { ICandidate } from "../../../hooks/candidates";

const CandidateListCard: React.FC<ICandidate> = (candidate) => {
  // const handleOnClick = useCallback(() => {}, []);

  return (
    <Container>
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
