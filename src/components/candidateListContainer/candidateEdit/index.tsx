import React, { useCallback, useRef, useState, useEffect } from "react";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

import {
  FiMail,
  FiUser,
  FiLinkedin,
  FiChevronLeft,
  FiTrash2,
} from "react-icons/fi";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Switch from "../../switch";
import Input from "../../input";

import { ICandidate, useCandidates } from "../../../hooks/candidates";
import { useToast } from "../../../hooks/toast";

import getValidationError from "../../../utils/getValidationErrors";

import {
  Container,
  CreateButton,
  CancelButton,
  FormContainer,
  CheckboxContainer,
  SwitchContainer,
  DeleteButton,
  InputContainer,
} from "./styles";

const CandidateEdit: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);
  const match = useRouteMatch();
  const { addToast } = useToast();
  const {
    deleteCandidate,
    editCandidate,
    storeCandidate,
    readSingle,
    candidateState,
  } = useCandidates();

  const { id } = match.params as { id: string };

  useEffect(() => {
    readSingle(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useLocation()]);

  const [csharp, setCsharp] = useState<boolean>(
    candidateState.technologies.includes("csharp")
  );
  const [javascript, setJavascript] = useState<boolean>(
    candidateState.technologies.includes("javascript")
  );
  const [nodejs, setNodejs] = useState<boolean>(
    candidateState.technologies.includes("nodejs")
  );
  const [angular, setAngular] = useState<boolean>(
    candidateState.technologies.includes("angular")
  );
  const [react, setReact] = useState<boolean>(
    candidateState.technologies.includes("react")
  );
  const [ionic, setIonic] = useState<boolean>(
    candidateState.technologies.includes("ionic")
  );
  const [php, setPhp] = useState<boolean>(
    candidateState.technologies.includes("php")
  );
  const [mensageria, setMensageria] = useState<boolean>(
    candidateState.technologies.includes("mensageria")
  );
  const [laravel, setLaravel] = useState<boolean>(
    candidateState.technologies.includes("laravel")
  );

  const handleSubmit = useCallback(
    async (formCandidate: ICandidate) => {
      // eslint-disable-next-line no-param-reassign
      formCandidate.technologies = [];
      if (csharp) formCandidate.technologies.push("csharp");
      if (javascript) formCandidate.technologies.push("javascript");
      if (nodejs) formCandidate.technologies.push("nodejs");
      if (angular) formCandidate.technologies.push("angular");
      if (react) formCandidate.technologies.push("react");
      if (ionic) formCandidate.technologies.push("ionic");
      if (php) formCandidate.technologies.push("php");
      if (mensageria) formCandidate.technologies.push("mensageria");
      if (laravel) formCandidate.technologies.push("laravel");

      // eslint-disable-next-line no-param-reassign
      formCandidate.id = candidateState.id;

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required("Nome obrigatório."),
          email: Yup.string()
            .required("Email obrigatório.")
            .email("Digite um email válido."),
        });

        await schema.validate(formCandidate, { abortEarly: false });

        storeCandidate(formCandidate);
        await editCandidate(formCandidate);
        history.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationError(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: "error",
          title: "Erro na Criação de Candidato",
          description:
            "Ocorreu um erro na edição do candidato, verifique os dados e tente novamente.",
        });
      }
    },
    [
      csharp,
      javascript,
      nodejs,
      angular,
      react,
      ionic,
      php,
      mensageria,
      laravel,
      candidateState.id,
      storeCandidate,
      editCandidate,
      history,
      addToast,
    ]
  );

  const handleCancelOnClick = useCallback(async () => {
    history.goBack();
  }, [history]);

  const handleDeleteOnClick = useCallback(async () => {
    await deleteCandidate(candidateState);
    history.goBack();
  }, [candidateState, deleteCandidate, history]);

  return (
    <Container>
      <CancelButton
        name="cancel"
        icon={FiChevronLeft}
        onClick={handleCancelOnClick}
      />

      <DeleteButton
        name="delete"
        icon={FiTrash2}
        onClick={handleDeleteOnClick}
      />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <CreateButton type="submit" name="create">
            Salvar
          </CreateButton>
          <InputContainer>
            <Input
              name="name"
              icon={FiUser}
              placeholder="Nome"
              defaultValue={candidateState.name}
            />
            <Input
              name="email"
              icon={FiMail}
              placeholder="E-mail"
              defaultValue={candidateState.email}
            />
            <Input
              name="linkedinUrl"
              icon={FiLinkedin}
              placeholder="URL Linkedin"
              defaultValue={candidateState.linkedinUrl}
            />
            <Input
              type="number"
              name="age"
              placeholder="Idade"
              defaultValue={candidateState.age}
            />
          </InputContainer>
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
                onClick={() => setNodejs((oldState) => !oldState)}
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
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CandidateEdit;
