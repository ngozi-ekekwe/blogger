import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layout/DefaultLayout';
import InputWrapper from '../components/InputWrapper';
import Button from '../components/Button';
import { Container } from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import Loader from '../components/Loader';

class NewStory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      userId: null,
      loading: false
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick = (e) => {
    this.setState({loading: true})
    const { createStory } = this.props;
    createStory(this.state)
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    this.setState({
      userId: decoded.UserId
    })
  }


  render() {
    const { loading } = this.state;
    return (
      <DefaultLayout>
        <div className="mt-5">
          <Container>
            <InputWrapper>
              <input placeholder="Title" name="title" onChange={this.onChange} />
            </InputWrapper>
              <textarea placeholder="Write new story" name="content" onChange={this.onChange} />
            <div className="button-container mt-3">
              { !loading ?
              <Button title="publish" onClick={this.onClick} />
              :
              <Loader loading />
              }
            </div>
          </Container>
        </div>
      </DefaultLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createStory: (story) => dispatch({ type: 'CREATE_STORY', story })
  });
}

export default connect(null, mapDispatchToProps)(NewStory);