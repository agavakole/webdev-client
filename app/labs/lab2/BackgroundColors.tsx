export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        A sample block with a yellow background and black text.
      </p>

      <p className="wd-bg-color-gray wd-fg-color-black">
        This paragraph has a gray background, but{" "}
        <span className="wd-bg-color-yellow wd-fg-color-black">
          this text has a yellow background.
        </span>
      </p>
    </div>
  );
}
