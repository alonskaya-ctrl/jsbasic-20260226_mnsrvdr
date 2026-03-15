function getMinMax(str) {
  let items = str.split(' ');

  let numbers = items
    .map(item => Number(item))
    .filter(item => !isNaN(item));

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  return { min, max };
}

// Пример использования
let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
console.log(getMinMax(inputData)); 
// { min: -5.8, max: 73 }
