// var year = +prompt("Какой сейчас год?");
// if (year === 2015) {
// 	alert('Вы правы!');
// } else {
// 	alert('С луны свалися? 2015!');
// }


// var count = +prompt('Введите любое целое число?');
// if (count > 1) {
// 	alert(1);
// } else if (count < 0) {
// 	alert(-1);
// } else {
// 	alert(0);
// }

// var login = prompt('Plz writte your login');
// if (login === 'admin') {
// 	var password = prompt('Plz writte your password');
// } else if (login === null) {
// 	alert('Canceled');
// } else {
// 	alert('Access denied');
// }


// if (password === 'passw0rd') {
// 	alert('Welcome home!');
// } else if (password === null) {
// 	alert('Canceled');
// } else {
// 	alert('Wrong password');
// }


// var a = 1,
// 	b = 2;
// var message = (a + b >= 3) ? 'Yep!' : 'Noup!';
// alert(message);



var name = prompt('Your name?');
var message = (name == 'admin') ? 'HI' :
	(name == 'manager') ? 'Hellow' :
	(name == ' ') ? 'No login' : 'Wrong';

alert(message);