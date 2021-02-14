/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { FiFilter } from "react-icons/fi";

import CandidateListCard from "./candidateListCard";

import { Container, CreateButton, FilterButton, ListContainer } from "./styles";

import { useCandidates } from "../../../hooks/candidates";

const CandidateList: React.FC = () => {
  const { candidatesListState } = useCandidates();
  const { readFiltered, readAll } = useCandidates();

  function useQuery() {
    return new URLSearchParams(useLocation().search).getAll("tech");
  }

  const query = useQuery();

  useEffect(() => {
    query.length === 0 ? readAll() : readFiltered(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useLocation()]);

  return (
    <Container>
      <Link to="dashboard/create">
        <CreateButton name="create">Adicionar</CreateButton>
      </Link>
      <Link to="dashboard/filter">
        <FilterButton name="create" icon={FiFilter} />
      </Link>
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
