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
    return (
      <DefaultLayout>
        <Container>
          <CardListing  />
        </Container>
      </DefaultLayout>
    );
  }
}

function mapStateToProps(state, props) {
  // console.log(state, 'this is ststae')
  return {
    // stories: state.,
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllStories: () => dispatch({ type: 'GET_ALL_STORIES' })
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);