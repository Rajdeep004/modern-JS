// functions

function add(a, b) {
	return a + b;
}

const ans = add(12, 12);
console.log(ans);

// arrow functions ya fir anonymous
const double = (a) => a * 2;
console.log(double(12));

() => {};

() => (a) => a * 2;
