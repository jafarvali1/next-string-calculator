export const add = (numbers) => {
    if (numbers === "") return 0;
    const nums = numbers.split(/[\n,]+/).map(Number);    
    // Check for negative numbers
    const negatives = nums.filter(num => num < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
    return nums.reduce((sum, num) => sum + num, 0);
  };
  