import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders TopNav and title', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toEqual('HOT or COLD');
    expect(wrapper.find('TopNav').exists()).toEqual(true);
  })
})