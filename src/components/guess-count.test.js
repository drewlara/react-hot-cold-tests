import React from 'react';
import {shallow} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  })

  it('Renders guess count text', () => {
    const wrapper = shallow(<GuessCount guessCount={2} />);
    expect(wrapper.text()).toEqual("You've made 2 guesses!")
  })
})