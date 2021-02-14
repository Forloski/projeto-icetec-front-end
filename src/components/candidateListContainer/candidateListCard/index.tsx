import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";

import defaultAvatar from "../../../assets/default-avatar.png";

import { ICandidate, useCandidates } from "../../../hooks/candidates";

const CandidateListCard: React.FC<ICandidate> = (candidate) => {
  const { storeCandidate } = useCandidates();

  const handleOnClick = useCallback(() => {
    storeCandidate(candidate);
  }, [candidate, storeCandidate]);

  return (
    <Link
      to={`/dashboard/candidate/${candidate.id}`}
      style={{ textDecoration: "none" }}
    >
      <Container onClick={handleOnClick}>
        <img src={defaultAvatar} alt="defaultAvatar" />
        <div>
          <p id="candidateNameTextField">{candidate.name}</p>
          <p id="candidateEmailTextField">{candidate.email}</p>
          <p id="candiodateLikedinTextField">{candidate.linkedinUrl}</p>
        </div>
      </Container>
    </Link>
  );
};

export default CandidateListCard;
