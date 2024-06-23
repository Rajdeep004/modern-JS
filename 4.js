// Default parameters
function hello(person = "Shyam") {
	console.log(`hello from ${person}`);
}
hello();
hello("Raju");

function add(a, b, c = 0) {
	return a + b + c;
}
console.log(add(1, 2, 3));
console.log(add(1, 2));
console.log(add(12, 90));
