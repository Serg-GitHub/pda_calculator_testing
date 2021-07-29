import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  });

  it('should add two numbers together', () => {
  // Writing const buttons required for the test
  const button4 = container.find('#number4')
  const button1 = container.find('#number1')
  const add = container.find('#operator_add')
  const equals = container.find('#operator-equals')
  // The container finds the running total
  const runningTotal = container.find('#running-total');
  // Adding click function
  button4.simulate('click');
  add.simulate('click');
  button1.simulate('click');   
  equals.simulate('click');
  // After simulating clicking the buttons it should return return 5
  expect(runningTotal.text()).toEqual('5');
});

})
