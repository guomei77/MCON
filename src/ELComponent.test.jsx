import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ELComponent from './ELComponent';

Enzyme.configure({ adapter: new Adapter() });


describe('<ELComponent />', () => {
  it('check employee component count', () => {
    const wrapper = shallow( < ELComponent / > );
    let employeeCount = wrapper.state().employees.length;
    expect(wrapper.find('#board').shallow().find('.EmployeeComponent')).to.have.length(employeeCount);
  });

});
