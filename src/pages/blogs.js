import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import DefaultLayout from '../layout/DefaultLayout';
import CardListing from '../components/CardListing';

class Blogs extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getAllStories } = this.props;
    getAllStories()
  }

  render() {
    const { stories } = this.props;
    return (
      <DefaultLayout>
        <Container>
          <CardListing stories={stories}  />
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);