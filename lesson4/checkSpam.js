
// Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

function checkSpam(x){
 return x.toLowerCase().indexOf('sex') > 0 || x.toLowerCase().indexOf('spam') > 0;
}
// checkSpam('get new Sex videos'); // true
// checkSpam('[SPAM] How to earn fast money?'); // true
// checkSpam('New PSD template'); // false
console.log(checkSpam("get new SeX videos"));
