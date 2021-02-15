// Write your function here
function computeAverageLengthOfWords(word1, word2){
  let cant1 = word1.length;
  let cant2 = word2.length;
  let promedio = (cant1 + cant2)/2;
  return promedio;
}

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);