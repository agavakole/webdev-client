export default function FunctionDestructing() {
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);

  // destructuring an object in a function parameter
  const subtract = ({ a, b }: { a: number; b: number }) => a - b;
  const difference = subtract({ a: 4, b: 2 });

  // destructuring an object to multiply two numbers
  const multiply = ({ a, b }: { a: number; b: number }) => a * b;
  const product = multiply({ a: 3, b: 4 });

  // destructuring an object with a default parameter
  const greet = (name = "Ada") => name;
  const greeting = greet();

  // destructuring an object to divide two numbers
  const divide = ({ a, b }: { a: number; b: number }) => a / b;
  const quotient = divide({ a: 10, b: 2 });

  return (
    <div id="wd-function-destructing">
      <h2>Function Destructing</h2>
      <h3>Book Examples</h3>
      const add = (a, b) =&gt; a + b; <br />
      const sum = add(1, 2); <br />
      const subtract = ({"{ a, b }"}) =&gt; a - b; <br />
      const difference = subtract({"{ a: 4, b: 2 }"}); <br />
      sum = {sum} <br />
      difference = {difference} <br />
      multiply({"{ a: 3, b: 4 }"}) = {product} <br />
      greet() = {greeting} <br />
      divide({"{ a: 10, b: 2 }"}) = {quotient} <br />
      <hr />
    </div>
  );
}
