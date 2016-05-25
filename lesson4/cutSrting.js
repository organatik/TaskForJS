// Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. 
// Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'



function cutStr(str) {
	if (str.length <= 20){
		return str;
	} 
    else if (str.length > 20){
      return str.substring(0,20) + "...";
    }
}
console.log(cutStr('This string is above than 20 symbols'));