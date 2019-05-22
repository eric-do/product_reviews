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
    displayName: 'display_name',
    options: {
      optionId: 'test',
      optionName: 'Test Name'
    }
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

  it('should start with the hover state to be false', () => {
    expect(wrapper.state('showMenu')).toBe(false);
  });
});

// describe('Selecting filter options', () => {
//   it('should change state on hover', () => {
    
//   });

//   it('should invoke the callback on click', () => {
//     expect(wrapper.find('RadioLabel').exists).toBeTruthy();
//     expect(wrapper.find('FilterDropdown')).to.have.lengthOf(1);
//     wrapper.find('RadioLabel').simulate('click');
//     expect(mockCallback).toHaveBeenCalled();
//   });
// });