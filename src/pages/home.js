import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import DefaultLayout from '../layout/DefaultLayout';
import LandingScreen from '../components/LandingScreen';
import CardListing from '../components/CardListing';

class Home extends Component {
  state = {
    isAuthenticated: false
  }

  componentDidMount() {
    const { getAllStories } = this.props;
    getAllStories()
    const token = localStorage.getItem('token')
    if(token) {
      this.setState({
        isAuthenticated: true
      })
    }
  }

  render() {
    const { isAuthenticated } = this.state
    const { stories } = this.props;
    return (
      <DefaultLayout>
        { !isAuthenticated ? <LandingScreen /> : <Container> <CardListing stories={stories} /> </Container>}
      </DefaultLayout>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    stories: state.storyReducer.stories
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllStories: () => dispatch({ type: 'GET_ALL_STORIES' })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);