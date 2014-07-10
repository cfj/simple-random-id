var generate = function(length) {
  length = Math.abs(length) || 10;

  var output = generateTen();
  if (length === 0) {
    throw new Error("Random-id needs to be at least 1 character long.");
  } else if (length > 10) {
    var tens = ~~(length/10);
    while (tens--) {
      output += generateTen();
    }
  }

  return output.substr(0, length);
}

var generateTen = function() {
  // This could be 10 or 11 (depends on the value returned by Math.random())
  // but since we truncate it in the main function we don't need to do it
  // in here
  return Math.random().toString(36).slice(2).toUpperCase();
}


console.log(generate(3));
console.log(generate());
console.log(generate(-5));
console.log(generate(21));
