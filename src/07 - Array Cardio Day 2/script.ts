// ## Array Cardio Day 2

const persons = [
	{ name: 'Wes', year: 1988 },
	{ name: 'Kait', year: 1986 },
	{ name: 'Irv', year: 1970 },
	{ name: 'Lux', year: 2015 },
];

const comments = [
	{ text: 'Love this!', id: 523423 },
	{ text: 'Super good', id: 823423 },
	{ text: 'You are the best', id: 2039842 },
	{ text: 'Ramen is my fav food ever', id: 123523 },
	{ text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const someone19 = persons.some(
	(person) => new Date().getFullYear() - person.year >= 19
);
console.log({ someone19 });
// Array.prototype.every() // is everyone 19 or older?
const everyone19 = persons.every(
	(person) => new Date().getFullYear() - person.year >= 19
);
console.log({ everyone19 });

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const foundComment = comments.find((comment) => comment.id === 823423);
console.log(foundComment);

// Array.prototype.findIndex()
// Find the comment with this ID
const index = comments.findIndex((comment) => comment.id === 823423);
// delete the comment with the ID of 823423
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.table(newComments);
