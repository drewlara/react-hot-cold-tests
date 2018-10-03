import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';

describe('<Game />', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  })

  it('Starts a new game', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      guesses: [2, 5, 11, 8],
      feedback: 'Some Feedback!',
      correctAnswer: 50
    });
    wrapper.instance().restartGame();
    expect(wrapper.state('guesses')).toEqual([]);
    expect(wrapper.state('feedback')).toEqual('Make your guess!');
    expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(0);
    expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
  })

  it('Accepts new guesses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 50
    })
    wrapper.instance().makeGuess(25);
    expect(wrapper.state('guesses')).toEqual([25]);
    expect(wrapper.state('feedback')).toEqual("You're Warm.");
    wrapper.instance().makeGuess(50);
    expect(wrapper.state('guesses')).toEqual([25, 50]);
    expect(wrapper.state('feedback')).toEqual('You got it!')
  })

  it('Generates new aural statuses', () => {
    const wrapper = shallow(<Game />);
    wrapper.setState({
      correctAnswer: 25
    })
    wrapper.instance().makeGuess(10);
    wrapper.instance().makeGuess(15)
    expect(wrapper.state('guesses')).toEqual([10, 15]);
    wrapper.instance().generateAuralUpdate()
    expect(wrapper.state('auralStatus')).toEqual("Here's the status of the game right now: You're Warm. You've made 2 guesses. In order of most- to least-recent, they are: 15, 10");
  })
})