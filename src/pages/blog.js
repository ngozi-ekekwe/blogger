import React, { Component } from 'react';
import { connect } from 'react-redux';
import DefaultLayout from '../layout/DefaultLayout';
import { Container } from 'react-bootstrap';
import BlogHeader from '../components/BlogHeader';
import { getSingleStory } from '../services/api';

class Blog extends Component {
  static async getInitialProps({ req, query, params}) {
    const { slug = 'index' } = query;
    return { slug};
  }

  componentDidMount() {
    const { slug, getStory} = this.props;
    if(slug) {
      return getStory(slug)
    }
  }

  render() {
    const { story } = this.props;
    return (
      <DefaultLayout>
        <Container>
          <BlogHeader story={story} />
          <p className="blog-content">
            {story[0] && story[0].content}
          </p>
        </Container>
      </DefaultLayout>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    story: state.storyReducer.story
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getStory: (slug) => {
      return dispatch({ type: 'GET_STORY', slug })
    }
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);