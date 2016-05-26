// Написать функцию которая принимает на вход
// массив и возвращает последний элемент массива.
function getLastArr(arr) {
	return arr[arr.length - 1]
}
var fruits = ["Apple", "Orange", "Peach", "Pineapple"];
console.log(getLastArr(fruits))