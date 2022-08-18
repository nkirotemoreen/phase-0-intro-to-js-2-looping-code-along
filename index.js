// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, surpise) {
	const message = [];
    //for loop
	for (let i = 0; i < names.length; i++) {
		const thankYou = `Thank you, ${names[i]}, for the wonderful ${surpise} gift!`;
		message.push(thankYou);
	}
	return message;
}

 console.log(writeCards());
 writeCards(names, "surprise");

const number = 10;
function countDown(number) {
	let i = 10;
	while (i >= 0) {
		console.log(i--);
	}
	return number;

}
countDown(number); 