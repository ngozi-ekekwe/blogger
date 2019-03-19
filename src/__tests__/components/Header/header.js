import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../../components/Header';

describe('Header Component', () => {
  describe('render()', () => {
    test('it render routes when authenticated', () => {
      const component = shallow(<Header  />);
      component.update();
      expect(component.instance().getRoutes(true)).toEqual( [{ route: "/new-story", label: "Create" }, { route: "/blogs", label: "Stories" }]);
    });

    test('it should render routes when not autheticated', () => {
      const component = shallow(<Header  />);
      expect(component.instance().getRoutes(false)).toEqual([{ route: "/login", label: "Sign in" }, { route: "/signup", label: "Get Started" }]);
    })
  })
})