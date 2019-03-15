import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Authentication from '../components/Authentication';
import InputWrapper from '../components/InputWrapper';
import Button from '../components/Button';
import { Container } from 'react-bootstrap';

const fields = [
  {
    label: 'Title',
    placeHolder: 'Enter your email',
    type: 'text'
  },
]

const NewStory = () => {
  return (
    <DefaultLayout>
      <div className="mt-5">
        <Container>
          <InputWrapper>
            <input placeholder="Title" />
          </InputWrapper>

          <Button title="publish" />

        </Container>
      </div>
    </DefaultLayout>
  );
};

export default NewStory;