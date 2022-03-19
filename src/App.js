import './App.css';
import Calc from './Calculation.js'
import React from "react";

function App() {

  document.querySelectorAll('button').forEach((btn) => {
    const input = document.querySelector('input');
    btn.addEventListener('click', () => {
      if (btn.value === 'clear') {
        input.value = ' ';
      } else if (btn.value === '=') {
        input.value = Calc(input.value);
      } else {
        input.value += btn.value;
      }
    })
  })

  return (
      <div>
        <div className={'input'}>
          <input className={'input_itself'} type={'text'}/>
        </div>
        <div className={'line1'}>
          <button value={'('}>(</button>
          <button value={')'}>)</button>
          <button> </button>
          <button value={'clear'}>AC</button>
        </div>
        <div className={'line2'}>
          <button value={'7'}>7</button>
          <button value={'8'}>8</button>
          <button value={'9'}>9</button>
          <button value={'/'}>/</button>
        </div>
        <div className={'line3'}>
          <button value={'4'}>4</button>
          <button value={'5'}>5</button>
          <button value={'6'}>6</button>
          <button value={'*'}>*</button>
        </div>
        <div className={'line4'}>
          <button value={'1'}>1</button>
          <button value={'2'}>2</button>
          <button value={'3'}>3</button>
          <button value={'-'}>-</button>
        </div>
        <div className={'line5'}>
          <button value={'0'}>0</button>
          <button value={'00'}>00</button>
          <button value={'='}>=</button>
          <button value={'+'}>+</button>
        </div>
      </div>
  )}

export default App;

