const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
