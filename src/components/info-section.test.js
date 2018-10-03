import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
  it('Renders without crashing', () => {
    shallow(<InfoSection />);
  });

  it('Renders all elements', () => {
    const wrapper = shallow(<InfoSection />);
    expect(wrapper.find('section').children().length).toEqual(4);
  })
})