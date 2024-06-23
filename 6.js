// destrucing
const person1 = {
	name: "Rajdeep",
	age: 20,
	intersets: ["Codding", "Signing", "Falana"],
	add: (a, b) => {
		return a + b;
	},
	double: (a) => 2 * a,
};

// const a = person1.name;
// const d = person1.age;

const { name: a, double: d } = person1; // destrucing
console.log(a);
console.log(d(12));
