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
  // Writing const for buttons required for the test
  const button4 = container.find('#number4')
  const button1 = container.find('#number1')
  const add = container.find('#operator_add')
  const equals = container.find('#operator-equals')
  // The container finds the running total
  const runningTotal = container.find('#running-total');
  // Adding click buttons simulation
  button4.simulate('click');
  add.simulate('click');
  button1.simulate('click');   
  equals.simulate('click');
  // After simulating clicking the buttons, the total expected should be 5
  expect(runningTotal.text()).toEqual('5');
});


it('should subtract one number from another', () => {
  // Writing const for buttons required for the test
  const button7 = container.find('#number7')
  const button4 = container.find('#number4')
  const subtract = container.find('#operator-subtract');
  const equals = container.find('#operator-equals')
  // The container finds the running total
  const runningTotal = container.find('#running-total');
  // Adding click buttons simulation
  button7.simulate('click');
  subtract.simulate('click');
  button4.simulate('click');   
  equals.simulate('click');
  // After simulating clicking the buttons, the total expected should be 3
  expect(runningTotal.text()).toEqual('3');
});


  it('should multiply two numbers together', () => {
    // Writing const for buttons required for the test
    const button5 = container.find('#number5')
    const button3 = container.find('#number3')
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals')
    // The container finds the running total
    const runningTotal = container.find('#running-total');
    // Adding click buttons simulation
    button5.simulate('click')
    multiply.simulate('click')
    button3.simulate('click')
    equals.simulate('click')
    // After simulating clicking the buttons, the total expected should be 15
    expect(runningTotal.text()).toEqual('15');
  });

  
  it ('should divide two numbers', () => {
    // Writing const for buttons required for the test
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button7 = container.find('#number7')
    const divide = container.find('#operator-divide')
    const equals = container.find('#operator-equals')
    // The container finds the running total
    const runningTotal = container.find('#running-total');
    // Adding click buttons simulation
    button2.simulate('click')
    button1.simulate('click')
    divide.simulate('click')
    button7.simulate('click')
    equals.simulate('click')
    // After simulating clicking the buttons, the total expected should be 3
    expect(runningTotal.text()).toEqual('3');
  });

  it ('should chain multiple operations', () => {
    // adding multiple operations
    const button6 = container.find('#number6')
    const button5 = container.find('#number5')
    const button2 = container.find('#number2')
    const button1 = container.find('#number1')
    const button0 = container.find('#number0')
    const add = container.find('#operator_add')
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals')

    const runningTotal = container.find('#running-total');

    button6.simulate('click')
    add.simulate('click')
    button5.simulate('click')
    button1.simulate('click')
    multiply.simulate('click')
    button2.simulate('click')
    button0.simulate('click')
    equals.simulate('click')

    expect(runningTotal.text()).toEqual('1140')
    

  })
 
  it ('should clear the running total', () => {
    // it clears the running total without affecting the calculation
    const button7 = container.find('#number7')
    const button6 = container.find('#number6')
    const button5 = container.find('#number5')
    const button4 = container.find('#number4')
    
    const clear = container.find('#clear')
    const add = container.find('#operator_add')
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals')

    const runningTotal = container.find('#running-total');

    button7.simulate('click')
    add.simulate('click')
    button6.simulate('click')
    multiply.simulate('click')
    button5.simulate('click')
    add.simulate('click')
    button4.simulate('click')
    clear.simulate('click')
    equals.simulate('click')
    
    expect(runningTotal.text()).toEqual('65')
  });

})
