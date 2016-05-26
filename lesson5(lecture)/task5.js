// Создайте функцию find(arr, value), которая ищет в массиве
// arr значение value и возвращает его позицию, если найдено,
// или -1, если не найдено.

function find(arr, value) {
	return arr.indexOf(value);
}
var fruits = ["Apple", "Orange", "Peach", "Pineapple"];
console.log(find(fruits, "Peach1"));
console.log(find(fruits, "Peach"));