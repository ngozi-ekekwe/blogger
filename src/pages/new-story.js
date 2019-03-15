import React, { Component } from 'react';
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

class NewStory extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultLayout>
        <div className="mt-5">
          <Container>
            <InputWrapper>
              <input placeholder="Title" />
            </InputWrapper>
              <textarea placeholder="Write new story" />
            <div className="button-container">
              <Button title="publish" />
            </div>
          </Container>
        </div>
      </DefaultLayout>
    );
  }
}

export default NewStory;