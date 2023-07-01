export const divideArrayOnChunks = (array, step = 2, skipOnEveryTwoSteps) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += step) {
    if (skipOnEveryTwoSteps && (i + 1) % 2 === 0) {
      chunked.push(array.slice(i, i + 1));
      i--;
      continue;
    } else {
      chunked.push(array.slice(i, i + step));
    }
  }
  return chunked;
};
