function cutStr(str) {
	if (str.length <= 20){
		return str;
	} 
    else if (str.length > 20){
      return str.substring(0,20) + "...";
    }
}
console.log(cutStr('This string is above than 20 symbols'));