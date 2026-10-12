export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-width-110px">Column 1</div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <br />
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-gray wd-width-110px">Pinned</div>
        <div className="wd-bg-color-yellow">Natural</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          AI: I stretch
        </div>
      </div>
      <br />
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-green wd-fg-color-white">Green column</div>
        <div className="wd-bg-color-yellow wd-width-110px">Fixed width</div>
        <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">
          I stretch to fill the space
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white">Blue column</div>
      </div>
    </div>
  );
}
