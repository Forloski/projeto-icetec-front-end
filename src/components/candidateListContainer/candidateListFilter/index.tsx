import React, { useCallback, useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

import Switch from "../../switch";

import { useCandidates } from "../../../hooks/candidates";
import { useDashboardScreen } from "../../../hooks/dashboardScreen";

import {
  Container,
  FilterButton,
  CancelButton,
  CheckboxContainer,
  SwitchContainer,
} from "./styles";

const CandidateCreate: React.FC = () => {
  const [csharp, setCsharp] = useState<boolean>(false);
  const [javascript, setJavascript] = useState<boolean>(false);
  const [nodejs, setNodejsl] = useState<boolean>(false);
  const [angular, setAngular] = useState<boolean>(false);
  const [react, setReact] = useState<boolean>(false);
  const [ionic, setIonic] = useState<boolean>(false);
  const [php, setPhp] = useState<boolean>(false);
  const [mensageria, setMensageria] = useState<boolean>(false);
  const [laravel, setLaravel] = useState<boolean>(false);

  const { storeDashboardScreen } = useDashboardScreen();
  const { readFiltered } = useCandidates();

  const handleCancelOnClick = useCallback(async () => {
    storeDashboardScreen(1);
  }, [storeDashboardScreen]);

  const handleFilterOnClick = useCallback(async () => {
    const filter: string[] = [];

    if (csharp) filter.push("csharp");
    if (javascript) filter.push("javascript");
    if (nodejs) filter.push("nodejs");
    if (angular) filter.push("angular");
    if (react) filter.push("react");
    if (ionic) filter.push("ionic");
    if (php) filter.push("php");
    if (mensageria) filter.push("mensageria");
    if (laravel) filter.push("laravel");

    if (filter !== []) {
      readFiltered(filter);
    }

    storeDashboardScreen(1);
  }, [
    angular,
    csharp,
    ionic,
    javascript,
    laravel,
    mensageria,
    nodejs,
    php,
    react,
    readFiltered,
    storeDashboardScreen,
  ]);

  return (
    <Container>
      <CancelButton
        name="cancel"
        icon={FiChevronLeft}
        onClick={handleCancelOnClick}
      />
      <FilterButton name="filter" onClick={handleFilterOnClick}>
        Filtrar
      </FilterButton>
      <CheckboxContainer>
        <SwitchContainer>
          <Switch
            checked={csharp}
            onClick={() => setCsharp((oldState) => !oldState)}
          />
          <p>C#</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={javascript}
            onClick={() => setJavascript((oldState) => !oldState)}
          />
          <p>JavaScript</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={nodejs}
            onClick={() => setNodejsl((oldState) => !oldState)}
          />
          <p>NodeJS</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={angular}
            onClick={() => setAngular((oldState) => !oldState)}
          />
          <p>Angular</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={react}
            onClick={() => setReact((oldState) => !oldState)}
          />
          <p>React</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={ionic}
            onClick={() => setIonic((oldState) => !oldState)}
          />
          <p>Ionic</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={php}
            onClick={() => setPhp((oldState) => !oldState)}
          />
          <p>PHP</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={mensageria}
            onClick={() => setMensageria((oldState) => !oldState)}
          />
          <p>Mensageria</p>
        </SwitchContainer>

        <SwitchContainer>
          <Switch
            checked={laravel}
            onClick={() => setLaravel((oldState) => !oldState)}
          />
          <p>Laravel</p>
        </SwitchContainer>
      </CheckboxContainer>
    </Container>
  );
};

export default CandidateCreate;
