function failStep() {
  return new Promise((resolve, reject) => {
    reject("Water didn’t boil!"); // Simulate failure
  });
}

async function testFail() {
  try {
    const result = await failStep(); // This will throw an error
    console.log(result); // This won't run
  } catch (error) {
    console.error("Something went wrong:", error); // This will run
  }
}
testFail();