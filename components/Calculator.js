'use client'
import React, { useState } from 'react';
import { add } from '@/utils/stringCalculator';

function StringCalculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCalculate = () => {
    setLoading(true);
    setError(null);
    try {
      const sum = add(input);
      setTimeout(() => {  // Simulate loading
        setLoading(false);
        setResult(sum);
      }, 500);
    } catch (e) {
      setLoading(false);
      setError(e.message);
      setResult(null);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter numbers" 
      />
      <button onClick={handleCalculate} disabled={loading}>
        {loading ? 'Calculating...' : 'Calculate'}
      </button>
      {result !== null && <div className="result">Result: {result}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default StringCalculator;
