import React , { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layout/DefaultLayout';
import Authentication from '../components/Authentication';
import InputWrapper from '../components/InputWrapper';

const fields = [
  {
    label: 'Email',
    name: 'email',
    placeHolder: 'Enter your email',
    type: 'text'
  },
  {
    label: 'Password',
    name: 'password',
    placeHolder: 'password',
    type: "password"
  }
]

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
        <Authentication title="Login" buttonText="Login" onButtonClick={this.onClick} loading={this.state.loading}>
          {
            fields.map((field) => {
              return (
                <InputWrapper>
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
    loginUser: (user) => dispatch({ type: 'LOGIN_USER', user })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
