import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import { FiChevronLeft } from "react-icons/fi";

import Switch from "../../../../components/switch";

import { useToast } from "../../../../hooks/toast";

import {
  Container,
  FilterButton,
  CancelButton,
  CheckboxContainer,
  SwitchContainer,
} from "./styles";

interface IFilter {
  tech: string[];
}

const CandidateListFilter: React.FC = () => {
  const history = useHistory();
  const { addToast } = useToast();

  const [csharp, setCsharp] = useState<boolean>(false);
  const [javascript, setJavascript] = useState<boolean>(false);
  const [nodejs, setNodejsl] = useState<boolean>(false);
  const [angular, setAngular] = useState<boolean>(false);
  const [react, setReact] = useState<boolean>(false);
  const [ionic, setIonic] = useState<boolean>(false);
  const [php, setPhp] = useState<boolean>(false);
  const [mensageria, setMensageria] = useState<boolean>(false);
  const [laravel, setLaravel] = useState<boolean>(false);

  const handleCancelOnClick = useCallback(async () => {
    history.goBack();
  }, [history]);

  const handleFilterOnClick = useCallback(async () => {
    const filter: IFilter = { tech: [] };

    if (csharp) filter.tech.push("csharp");
    if (javascript) filter.tech.push("javascript");
    if (nodejs) filter.tech.push("nodejs");
    if (angular) filter.tech.push("angular");
    if (react) filter.tech.push("react");
    if (ionic) filter.tech.push("ionic");
    if (php) filter.tech.push("php");
    if (mensageria) filter.tech.push("mensageria");
    if (laravel) filter.tech.push("laravel");

    const query = queryString.stringify(filter);

    addToast({
      type: "success",
      title: "Filtro aplicado com sucesso",
      description:
        "As informações foram filtradas e podem ser acessadas pela lista.",
    });

    filter.tech.length === 0
      ? history.push("/dashboard")
      : history.push(`/dashboard?${query}`);
  }, [
    angular,
    csharp,
    history,
    ionic,
    javascript,
    laravel,
    mensageria,
    nodejs,
    php,
    react,
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

export default CandidateListFilter;
