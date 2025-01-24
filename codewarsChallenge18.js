window.onload = function() {
  var nums = [3, 5, 7];

  function addNums(a, b, c) {
    console.log(a + b + c);
  }

  // Calling addNums with elements of nums spread as individual arguments
  addNums(...nums);
}

