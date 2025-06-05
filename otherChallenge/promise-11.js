function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data loaded"), 1000); // Simulate a delay
    });
}

function processData(data){
    console.log("Processing:", data);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data processed"), 1000); // Simulate processing time
    });
}

fetchData()
    .then(result =>{
        return processData(result);
    })
    .then(response =>{
        console.log("Final result", response);
    })

    .catch(error => {
        console.error("Caught Error:", error);
    });

