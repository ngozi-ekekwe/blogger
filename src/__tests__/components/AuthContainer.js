import React from 'react';
import { mount } from 'enzyme';
import AuthContainer from '../../components/AuthContainer';

describe('AuthContainer', () => {
  describe('should render children', () => {
    it('should render children', () => {
      const children = '<div>ahoy!</div>';
      const wrapper = mount(
        <AuthContainer>
          <div>ahoy!</div>
        </AuthContainer>
      )
      expect(wrapper.find('.authentication-content').html()).toBe(`<div class=\"authentication-content\"><h1></h1>${children}</div>`)
      wrapper.unmount();
    })
  })

  describe('when loading is true', () => {
    describe('given the loading state is set to true', () => {
      it('should render a loading icon', () => {
        const wrapper =  mount(
          <AuthContainer loading={true}>
            <div>ahoy!</div>
          </AuthContainer>
        )
        expect(wrapper.find('.button-container')).toHaveLength(1)
      })
    })
  })
})