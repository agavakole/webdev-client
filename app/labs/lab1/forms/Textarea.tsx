export default function Textarea() {
  return (
    <>
      <h5>Text boxes</h5>
      <label htmlFor="wd-textarea">Biography:</label>
      <br />
      <textarea
        id="wd-textarea"
        cols={30}
        rows={10}
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <br />
    </>
  );
}
