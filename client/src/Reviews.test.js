import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from './Reviews.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import $ from 'jquery';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => jest.resetModules());

describe('Reviews component', () => {
  it('should render three <Review /> components', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.find(Review)).to.have.length(100);
  });

});