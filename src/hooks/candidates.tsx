import React, { useState, useCallback, useContext } from "react";
import api from "../services/apiClient";

export interface ICandidate {
  id?: string;
  name: string;
  age: number;
  email: string;
  linkedinUrl: string;
  technologies: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface ICandidateContextData {
  candidatesListState: ICandidate[];
  candidateState: ICandidate;
  readAll(): void;
  readFiltered(filter: string[]): void;
  storeCandidate(candidate: ICandidate): void;
  createCandidate(candidate: ICandidate): Promise<ICandidate>;
  deleteCandidate(candidate: ICandidate): Promise<string>;
  editCandidate(candidate: ICandidate): Promise<string>;
  readSingle(id: string): void;
}

const defaultListState: ICandidate[] = [];

const defaultCandidateState: ICandidate = {
  id: "",
  name: "",
  age: 0,
  email: "",
  linkedinUrl: "",
  technologies: [],
};

const CandidatesContext = React.createContext({} as ICandidateContextData);

export const CandidateProvider: React.FC = ({ children }) => {
  const [candidatesListState, setCandidatesList] = useState<ICandidate[]>(
    defaultListState
  );

  const [candidateState, setCandidate] = useState<ICandidate>(
    defaultCandidateState
  );

  // get list with all candidates from database
  const readAll = useCallback(async () => {
    const response = await api.get<ICandidate[]>("candidates");
    const candidatesList = response.data;

    setCandidatesList(candidatesList);
  }, []);

  // get a single candidate from database
  const readSingle = useCallback(async (id: string) => {
    const response = await api.get<ICandidate>(`candidates/${id}`);
    const candidate = response.data;

    setCandidate(candidate);
  }, []);

  // get list with filtered candidates from database
  const readFiltered = useCallback(async (filter: string[]) => {
    const params = new URLSearchParams();
    filter.map((tech) => params.append("tech", tech));

    const request = {
      params,
    };

    const response = await api.get<ICandidate[]>("candidates/", request);
    const candidatesList = response.data;

    setCandidatesList(candidatesList);
  }, []);

  // set candidateState on App level for later use
  const storeCandidate = useCallback(async (candidate) => {
    setCandidate(candidate);
  }, []);

  // create candidate on our back-end database
  const createCandidate = useCallback(async (candidate) => {
    const response = await api.post<ICandidate>("candidates", candidate);
    return response.data;
  }, []);

  // delete candidate from our back-end database
  const deleteCandidate = useCallback(async (candidate) => {
    const response = await api.delete<ICandidate>(`candidates/${candidate.id}`);
    return response.statusText;
  }, []);

  const editCandidate = useCallback(async (candidate) => {
    const response = await api.put<ICandidate>(
      `candidates/${candidate.id}`,
      candidate
    );
    return response.statusText;
  }, []);

  return (
    <CandidatesContext.Provider
      value={{
        candidatesListState,
        candidateState,
        readAll,
        readFiltered,
        createCandidate,
        storeCandidate,
        deleteCandidate,
        editCandidate,
        readSingle,
      }}
    >
      {children}
    </CandidatesContext.Provider>
  );
};

export function useCandidates(): ICandidateContextData {
  const context = useContext(CandidatesContext);

  if (!context) {
    throw new Error("useCandidates must be used within an CAndidatesProvider");
  }

  return context;
}
