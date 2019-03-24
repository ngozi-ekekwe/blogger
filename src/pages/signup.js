import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layout/DefaultLayout';
import AuthContainer from '../components/AuthContainer';
import InputWrapper from '../components/InputWrapper';
import { signupFields } from '../helpers/auth'


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
        <AuthContainer title="Sign Up" buttonText="Sign up" onButtonClick={this.onClick} loading={this.state.loading}>
          {
            signupFields.map((field, i) => {
              return (
                <InputWrapper key={i}>
                  <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                </InputWrapper>
              )
            })
          }
        </AuthContainer>
      </DefaultLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createUser: (user) => dispatch({ type: 'CREATE_USER', user })
  });
}

export default connect(null, mapDispatchToProps)(Signup);