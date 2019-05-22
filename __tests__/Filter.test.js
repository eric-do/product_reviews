import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../client/src/Filter.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
let props;
let mockCallback;

const createProps = (mockCallback) => ({
  setFilters: mockCallback,
  filter: {
    id: 'test_id',
    displayName: 'display_name'
  }
});

beforeEach(() => {
  jest.resetModules();
  mockCallback = jest.fn();
  props = createProps(mockCallback);
  wrapper = shallow(<Filter {...props} /> );
});

describe('<Filter /> rendering', () => {
  it('should render elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});