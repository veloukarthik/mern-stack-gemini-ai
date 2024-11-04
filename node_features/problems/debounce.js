function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

// Example Usage
const debouncedLog = debounce(() => console.log('Function executed'), 1000);
debouncedLog();
      