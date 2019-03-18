import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layout/DefaultLayout';
import Authentication from '../components/Authentication';
import InputWrapper from '../components/InputWrapper';

const fields = [
  {
    label: 'First Name',
    placeHolder: 'Enter your first name',
    type: 'text',
    name: 'firstName'
  },
  {
    label: 'Last Name',
    placeHolder: 'Enter your last name',
    type: 'text',
    name: 'lastName'
  },
  {
    label: 'Bio',
    placeHolder: 'Enter your bio',
    type: 'text',
    name: 'bio'
  },
  {
    label: 'Email',
    placeHolder: 'Enter your email',
    type: 'email',
    name: 'email'
  },
  {
    label: 'Password',
    placeHolder: ' create password',
    type: "password",
    name: 'password'
  }
]

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      bio: '',
      email: '',
      password: '',
      loading: false,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick = () => {
    this.setState({loading: true})
    const { createUser } = this.props;
    return createUser(this.state)
  }

  render() {
    return (
      <DefaultLayout>
        <Authentication title="Sign Up" buttonText="Sign up" onButtonClick={this.onClick} loading={this.state.loading}>
          {
            fields.map((field, i) => {
              return (
                <InputWrapper key={i}>
                  <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                </InputWrapper>
              )
            })
          }
        </Authentication>
      </DefaultLayout>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    isAuthenticated: state.userReducer.isAuthenticated
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createUser: (user) => dispatch({ type: 'CREATE_USER', user })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);