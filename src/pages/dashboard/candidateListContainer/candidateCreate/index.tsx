import React, { useCallback, useRef, useState } from "react";
import { FiMail, FiUser, FiLinkedin, FiChevronLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import Switch from "../../../../components/switch";
import Input from "../../../../components/input";

import { ICandidate, useCandidates } from "../../../../hooks/candidates";

import { useToast } from "../../../../hooks/toast";

import getValidationError from "../../../../utils/getValidationErrors";

import {
  Container,
  CreateButton,
  CancelButton,
  FormContainer,
  CheckboxContainer,
  SwitchContainer,
  InputContainer,
} from "./styles";

const CandidateCreate: React.FC = () => {
  const history = useHistory();

  const [csharp, setCsharp] = useState<boolean>(false);
  const [javascript, setJavascript] = useState<boolean>(false);
  const [nodejs, setNodejsl] = useState<boolean>(false);
  const [angular, setAngular] = useState<boolean>(false);
  const [react, setReact] = useState<boolean>(false);
  const [ionic, setIonic] = useState<boolean>(false);
  const [php, setPhp] = useState<boolean>(false);
  const [mensageria, setMensageria] = useState<boolean>(false);
  const [laravel, setLaravel] = useState<boolean>(false);

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { createCandidate, storeCandidate } = useCandidates();

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
        await createCandidate(formCandidate);
        addToast({
          type: "success",
          title: "Candidato criado com sucesso.",
          description:
            "As informações foram salvas e podem ser acessadas pela lista.",
        });
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
            "Ocorreu um erro na criação de um candidato, verifique os dados e tente novamente.",
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
      storeCandidate,
      createCandidate,
      history,
      addToast,
    ]
  );

  const handleCancelOnClick = useCallback(async () => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      <CancelButton
        name="cancel"
        icon={FiChevronLeft}
        onClick={handleCancelOnClick}
      />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <CreateButton type="submit" name="create">
            Salvar
          </CreateButton>
          <InputContainer>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="linkedinUrl"
              icon={FiLinkedin}
              placeholder="URL Linkedin"
            />
            <Input type="number" name="age" placeholder="Idade" />
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
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CandidateCreate;
