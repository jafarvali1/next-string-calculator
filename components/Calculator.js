'use client';
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
    <div className="flex flex-col rounded-3xl items-center justify-center min-h-96 bg-gradient-to-r from-purple-700 via-blue-800 to-indigo-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
        className="w-full max-w-md p-2 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white placeholder-gray-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleCalculate}
        disabled={loading}
        className={`w-full max-w-md p-2 rounded-md bg-blue-600 text-white font-semibold transition duration-300 
          ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
      >
        {loading ? 'Calculating...' : 'Calculate'}
      </button>
      {result !== null && (
        <div className="mt-4 p-2 rounded-md bg-green-600 text-white">
          Result: {result}
        </div>
      )}
      {error && (
        <div className="mt-4 p-2 rounded-md bg-red-600 text-white">
          {error}
        </div>
      )}
    </div>
  );
}

export default StringCalculator;
