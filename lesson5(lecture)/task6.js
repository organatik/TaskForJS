// Создайте фунцию filterRange(arr, a, b), которая принимает
// массив чисел arr и возвращает новый массив, который
// содержит только числа из arr из диапазона от a до b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция не должна менять arr.
 function filterRange(arr, a, b){ 
for ( i = 0; i < arr.length; i++){
    if(arr[i] >= a && arr[i] <=b){
      var x = [arr[i]];
    console.log(x);
    }
  }
 }
var theNumbers = [1,3,5,7,9,10,15,20,30]; 
filterRange(theNumbers,2,20);
console.log(theNumbers);