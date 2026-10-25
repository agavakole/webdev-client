export default function ReduceFunction() {
  const numbers = [1, 2, 3, 4, 5];

  const sum = numbers.reduce((total, n) => total + n, 0);

  // multiply all numbers together
  const product = numbers.reduce((total, n) => total * n, 1);

  // join the numbers into a string
  const joined = numbers.reduce((text, n) => text + n, "");

  return (
    <div id="wd-reduce-function">
      <h4>Reduce Function</h4>
      sum = {sum} <br />
      product = {product} <br />
      joined = {joined}
      <hr />
    </div>
  );
}
