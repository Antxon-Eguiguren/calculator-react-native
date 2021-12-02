import {useRef, useState} from 'react';

enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [intermediateResult, setIntermediateResult] = useState('0');
  const [result, setResult] = useState('0');
  const operators = useRef<Operators>();

  const clear = () => {
    setIntermediateResult('0');
    setResult('0');
  };

  const generateNumber = (item: string) => {
    // Do not let to include more than 1 point sign in the result
    if (result.includes('.') && item === '.') {
      return;
    }

    if (result.startsWith('0')) {
      setResult(item);
    } else {
      setResult(result + item);
    }
  };

  const setIntermediateResultAndAppendOperation = (operation: string) => {
    if (result.endsWith('.')) {
      setIntermediateResult(result.slice(0, -1) + ' ' + operation);
    } else {
      setIntermediateResult(result + ' ' + operation);
    }
    setResult('');
  };

  const divide = () => {
    setIntermediateResultAndAppendOperation('/');
    operators.current = Operators.divide;
  };

  const multiply = () => {
    setIntermediateResultAndAppendOperation('*');
    operators.current = Operators.multiply;
  };

  const add = () => {
    setIntermediateResultAndAppendOperation('+');
    operators.current = Operators.add;
  };

  const substract = () => {
    setIntermediateResultAndAppendOperation('-');
    operators.current = Operators.substract;
  };

  const calculate = () => {
    const num1 = Number(result);
    const num2 = Number(intermediateResult.slice(0, -1));

    switch (operators.current) {
      case Operators.add:
        setResult(`${num1 + num2}`);
        break;

      case Operators.substract:
        setResult(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setResult(`${num1 * num2}`);
        break;

      case Operators.divide:
        setResult(`${num2 / num1}`);
        break;
    }
    setIntermediateResult('');
  };

  const rotate = () => {
    let array = result.split('');
    if (array.includes('-')) {
      array = array.filter(item => item !== '-');
    }
    const first = array.shift();
    array.push(String(first));
    setResult(array.join(''));
  };

  return {
    intermediateResult,
    result,
    generateNumber,
    clear,
    rotate,
    divide,
    multiply,
    add,
    substract,
    calculate,
  };
};
