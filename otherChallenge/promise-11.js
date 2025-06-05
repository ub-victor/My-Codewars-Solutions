function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded"), 1000); // Simulate a delay
    });
}

