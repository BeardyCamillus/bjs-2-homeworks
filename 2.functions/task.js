// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код
  sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  max = 0;
  let arrSum;
  for (let i = 0; i < arrOfArr.length; i++) {
    arrSum = func(arrOfArr[i])
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = Infinity,
    max = -Infinity,
    diff = 0,
    module;

  for (let i = 0; i < arr.length; i++) {
    module = Math.abs(arr[i]);
    if (module < min) {
      min = module;
    }
    if (module > max) {
      max = module;
    }
  }

  diff = max - min;

  return diff;
}
