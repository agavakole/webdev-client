export default function Destructing() {
  // Object destructuring
  const person = { name: "John", age: 25, city: "Boston" };
  const { name, age, city } = person;

  // Array destructuring
  const numbers = ["one", "two", "three", "four"];
  const [first, second, third, fourth] = numbers;

  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const {"{ name, age, city }"} = {JSON.stringify(person)} <br />
      name = {name} <br />
      age = {age} <br />
      city = {city} <br />
      <h3>Array Destructing</h3>
      const {"[first, second, third, fourth]"} = {JSON.stringify(numbers)}{" "}
      <br />
      first = {first} <br />
      second = {second} <br />
      third = {third} <br />
      fourth = {fourth} <br />
      <hr />
    </div>
  );
}
