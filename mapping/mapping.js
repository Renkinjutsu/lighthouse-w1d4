var words = ["ground", "control", "to", "major", "tom"];

function map(array, callback){
  var output = []
  array.forEach(function(item){
     output.push(callback(item))
  })
   console.log(output)
}

var length = function(input) {
  return input.length
}

var reverse = function (input) {
  return input.split('').reverse().join('');
}

var upperCase =  function(input){
  return input.toUpperCase()
}



map(words, length)
map(words, upperCase)
map(words, reverse)