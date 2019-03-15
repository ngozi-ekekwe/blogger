import React from 'react';
import { Container } from 'react-bootstrap';
import DefaultLayout from '../layout/DefaultLayout';
import CardListing from '../components/CardListing';

const blogs = () => {
  return (
    <DefaultLayout>
      <Container>
        <CardListing />
      </Container>
    </DefaultLayout>
  );
};

export default blogs;