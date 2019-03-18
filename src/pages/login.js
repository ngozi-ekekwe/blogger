import React , { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layout/DefaultLayout';
import AuthContainer from '../components/AuthContainer';
import InputWrapper from '../components/InputWrapper';
import { loginFields } from '../helpers/auth'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      loading: false,
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick = () => {
    this.setState({loading: true})
    const { loginUser } = this.props;
    return loginUser(this.state)
  }

  render() {
    return (
      <DefaultLayout>
        <AuthContainer title="Login" buttonText="Login" onButtonClick={this.onClick} loading={this.state.loading}>
          {
            loginFields.map((field) => {
              return (
                <InputWrapper>
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

function mapStateToProps(state, props) {
  return {
    isAuthenticated: state.userReducer.isAuthenticated
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    loginUser: (user) => dispatch({ type: 'LOGIN_USER', user })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
