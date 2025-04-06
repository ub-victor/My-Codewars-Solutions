let student1 = { name: 'James', age: 26, gender: 'male' };
let student2 = { name: 'Julia', age: 27, gender: 'female' };
let student3 = { name: 'Richard', age: 31, gender: 'male' };

/* const roster = [student1, student2, student3]; // Create an array of student objects

const getStudentNames = (roster) => {
    return roster.map(student => student.name); // Extract the 'name' property from each student object
};
const getStudentAges = (roster) => {
    return roster.map(student => student.age); // Extract the 'age' property from each student object
};
console.log(getStudentNames(roster)); // Log an array of student names: ['James', 'Julia', 'Richard']
console.log(getStudentAges(roster)); // Log an array of student ages: [26, 27, 31]
console.log(roster); // Log the original roster array of student objects

*/

const roster = new WeakSet([student1, student2, student3]);
console.log(roster.has(student1)); // Check if student1 is in the WeakSet: true
console.log(roster);
