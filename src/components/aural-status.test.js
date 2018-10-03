import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus auralStatus="status test" />)
  });

  it('Renders the status text', () => {
    const statusText = 'Test status text';
    const wrapper = shallow(<AuralStatus auralStatus={statusText} />)
    expect(wrapper.text()).toEqual(statusText);
  });
});