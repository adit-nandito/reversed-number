import "./App.css";
import { useState } from 'react';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    const filteredValue = event.target.value.replace(/[^0-9]/g, ''); // Allow only digits
    setInputValue(filteredValue);
  };

  // Function to calculate difference
  const calculateDifference = () => {
    if (inputValue === '') {
      setResult('Please enter a valid number.');
      return;
    }

    const originalNumber = parseInt(inputValue, 10);
    const reversedString = inputValue.split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
    const difference = Math.abs(originalNumber - reversedNumber);

    setResult(`Reversed number: ${reversedNumber}, Difference: ${difference}`);
  };

  return (
    <div className="App">
      <span>
        Number: <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      </span>
      <button onClick={calculateDifference}>Submit</button>
      <p>Result: {result}</p>
    </div>
  );
}
