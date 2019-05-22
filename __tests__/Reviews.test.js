import React from 'react';
import { shallow, mount } from 'enzyme';
import Reviews from '../client/src/Reviews.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import $ from 'jquery';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => jest.resetModules());

describe('Reviews component', () => {
  it('should render elements', () => {
    const wrapper = shallow(
      <Reviews reviews={['test']} sort={'helpful'}/>
    );
    expect(wrapper).toMatchSnapshot();
  });

});