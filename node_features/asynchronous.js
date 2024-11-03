
// Async/await example
async function fetchData() {
    try {
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve('Data fetched successfully');
            }, 2000);
        });
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Promise example
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Sample Data' };
            resolve(data);
        }, 1500);
    });
}

// Callback example
function processData(callback) {
    setTimeout(() => {
        const data = 'Processed data';
        callback(null, data);
    }, 1000);
}

// Usage examples
fetchData();

getData()
    .then(data => console.log('Promise resolved:', data))
    .catch(error => console.error('Promise rejected:', error));

processData((error, result) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Callback result:', result);
});
