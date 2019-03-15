import React, { Component } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Authentication from '../components/Authentication';
import InputWrapper from '../components/InputWrapper';

const fields = [
  {
    label: 'First Name',
    placeHolder: 'Enter your first name',
    type: 'text'
  },
  {
    label: 'Last Name',
    placeHolder: 'Enter your last name',
    type: 'text'
  },
  {
    label: 'Email',
    placeHolder: 'Enter your email',
    type: 'email'
  },
  {
    label: 'Bio',
    placeHolder: 'Enter your bio',
    type: 'text'
  },
  {
    label: 'Password',
    placeHolder: ' create password',
    type: "password"
  }
]

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DefaultLayout>
        <Authentication title="Sign Up" buttonText="Sign up">
          {
            fields.map((field) => {
              return (
                <InputWrapper>
                  <input placeholder={field.placeHolder} type={field.type} />
                </InputWrapper>
              )
            })
          }
        </Authentication>
      </DefaultLayout>
    );
  }
}

export default Signup;