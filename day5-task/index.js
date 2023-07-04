const person = {
  name: "John Doe",
  age: 30,
  occupation: "Engineer",
  hobbies: ["reading", "coding", "traveling"],
};
for (let key in person) {
  console.log(key, person[key]);
}
for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

