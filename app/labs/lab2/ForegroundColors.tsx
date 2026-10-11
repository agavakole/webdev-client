export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This sample is blue but{" "}
        <span className="wd-fg-color-black">this part is black</span>
      </p>

      <p className="wd-fg-color-green">
        This paragraph is green but{" "}
        <span className="wd-fg-color-red">this text is red.</span>
      </p>
    </div>
  );
}
