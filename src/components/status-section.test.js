import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection>', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={[]} />);
  });

  it('Renders all elements', () => {
    const wrapper = shallow(<StatusSection guesses={[]}/>);
    expect(wrapper.find('section').children().length).toEqual(3);
  });
})