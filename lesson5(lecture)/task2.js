// Написать функцию которая принимает на вход
// 2 параметра: массив, и элемент (любого типа).
// Этот элемент нужно добавить в конец массива.
// Функция должна вернуть массив с добавленным
// новым элементом.
function addEndtoArr(arr, any) {
	arr.push(any);
	return arr;
}
var fruits = ["Apple", "Orange", "Peach", "Pineapple"];
console.log(addEndtoArr(fruits, "Melon"))