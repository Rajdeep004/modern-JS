// spread operator

const nums = [1, 2, 3, 4, 5, 6];

const nums2 = [...nums, 7, 8, 9];

console.log(nums2);

const person = {
	name: "Raju",
	age: 20,
};

const coder = {
	...person,
	fav_lang: "JS",
	doCode: () => {
		console.log("doing codingggggggggg");
	},
};

console.log(coder.doCode());
