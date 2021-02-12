import React, { useCallback, useEffect } from "react";

import { FiFilter } from "react-icons/fi";

import CandidateListCard from "./candidateListCard";

import { Container, CreateButton, FilterButton, ListContainer } from "./styles";

import { useCandidates } from "../../hooks/candidates";

const CandidateList: React.FC = () => {
  const { readAll, candidatesState } = useCandidates();

  useEffect(() => {
    readAll();
  }, []);

  return (
    <Container>
      <CreateButton name="create">Adicionar</CreateButton>
      <FilterButton name="create" icon={FiFilter} />
      <ListContainer>
        {candidatesState.map((candidate) => (
          <CandidateListCard
            id={candidate.id}
            name={candidate.name}
            age={candidate.age}
            email={candidate.email}
            linkedinUrl={candidate.linkedinUrl}
            technologies={candidate.technologies}
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CandidateList;
