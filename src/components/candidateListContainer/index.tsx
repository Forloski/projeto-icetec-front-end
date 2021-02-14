/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useCallback, useEffect } from "react";

import { FiFilter } from "react-icons/fi";

import CandidateListCard from "./candidateListCard";

import { Container, CreateButton, FilterButton, ListContainer } from "./styles";

import { useCandidates } from "../../hooks/candidates";

import { useDashboardScreen } from "../../hooks/dashboardScreen";

const CandidateList: React.FC = () => {
  const { readAll, candidatesListState } = useCandidates();
  const { storeDashboardScreen } = useDashboardScreen();

  const handleCreateButtonOnClick = useCallback(() => {
    storeDashboardScreen(2);
  }, [storeDashboardScreen]);

  const handleFilterButtonOnClick = useCallback(() => {
    storeDashboardScreen(3);
  }, [storeDashboardScreen]);

  useEffect(() => {
    if (candidatesListState.length === 0) readAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <CreateButton name="create" onClick={handleCreateButtonOnClick}>
        Adicionar
      </CreateButton>
      <FilterButton
        name="create"
        icon={FiFilter}
        onClick={handleFilterButtonOnClick}
      />
      <ListContainer>
        {candidatesListState.length === 0
          ? null
          : candidatesListState.map((candidate) => (
              // eslint-disable-next-line prettier/prettier
            <CandidateListCard
                key={candidate.id}
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
