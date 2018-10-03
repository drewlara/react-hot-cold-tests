import React from 'react';
import {shallow} from 'enzyme';

import Feedback from './feedback'

describe('<Feedback />', () => {
  it('Renders without crashing', ()  => {
    shallow(<Feedback />)
  })

  it('Renders feedback text only when guessCount is 0', () => {
    const feedback = "Some Feedback";
    const wrapper = shallow(<Feedback feedback={feedback} guessCount={0} />);
    expect(wrapper.contains(feedback)).toEqual(true);
    expect(wrapper.find('span').exists()).toEqual(false);
  })

  it('Render feedback text and guessAgain message when guessCount is greater than 0', () => {
    const feedback = "Some Feedback";
    const wrapper = shallow(<Feedback feedback={feedback} guessCount={1} />);
    expect(wrapper.contains(feedback)).toEqual(true);
    expect(wrapper.find('span').exists()).toEqual(true);
  })
})