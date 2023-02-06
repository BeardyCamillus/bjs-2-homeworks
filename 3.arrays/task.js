function compareArrays(arr1, arr2) {
  let result;

  // Ваш код

  result = arr1.length === arr2.length && arr1.every((el, index) => el === arr2[index]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  resultArr = arr.filter(el => el > 0 && el % 3 === 0).map(filteredEl => filteredEl * 10);

  return resultArr; // array
}
