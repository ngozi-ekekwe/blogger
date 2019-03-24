import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Profile } from '../../../components/Profile';

describe('Profile', () => {
  describe('renders the component', () => {
    test('it renders the component correctly', () => {
      const component = shallow(<Profile user={1} content={'Hello world'} />);
      expect(toJson(component)).toMatchSnapshot();
    })
  })


  describe('Get the users profile', () => {
    test('', () => {
      const component = shallow(<Profile user={1} content={'Hello world'} dispatch={jest.fn()} />);
      component.update();
      expect(toJson(component)).toMatchSnapshot();

    })
  })
})