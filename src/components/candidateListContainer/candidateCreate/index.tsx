import React, { useCallback, useEffect, useRef } from "react";
import { Switch } from "pretty-checkbox-react";

import { FiFilter } from "react-icons/fi";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { ICandidate } from "../../../hooks/candidates";

import Input from "../../input";
import { Container, CreateButton, CancelButton, FormContainer } from "./styles";

const CandidateCreate: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ICandidate) => {
    console.log("submit");
  }, []);

  return (
    <Container>
      <CreateButton name="create">Adicionar</CreateButton>
      <CancelButton name="create" icon={FiFilter} />
      <FormContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input type="text" name="name">
            Name
          </Input>
          <Input type="text" name="email">
            Email
          </Input>
          <Input type="text" name="age">
            Age
          </Input>
          <Input type="text" name="linkedinUrl">
            LinkedinUrl
          </Input>
          <div>
            <Switch name="cSharp" enterKeyHint="false">
              C#
            </Switch>
            <Switch name="Javascript" enterKeyHint="false">
              Javascript
            </Switch>
            <Switch name="Nodejs" enterKeyHint="false">
              Nodejs
            </Switch>
            <Switch name="Angular" enterKeyHint="false">
              Angular
            </Switch>
            <Switch name="React" enterKeyHint="false">
              React
            </Switch>
            <Switch name="Ionic" enterKeyHint="false">
              Ionic
            </Switch>
            <Switch name="Mensageria" enterKeyHint="false">
              Mensageria
            </Switch>
            <Switch name="PHP" enterKeyHint="false">
              PHP
            </Switch>
            <Switch name="Laravel" enterKeyHint="false">
              Laravel
            </Switch>
          </div>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default CandidateCreate;
