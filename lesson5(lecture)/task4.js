// Написать функцию которая принимает на вход массив и
// возвращает случайное значение из этого массива.
var fruits = ["Apple", "Orange", "Peach", "Pineapple"];

function getRandom(arr) {
	var rand = Math.floor(Math.random() * (arr.length));
	return fruits[rand];
}
console.log(getRandom(fruits));