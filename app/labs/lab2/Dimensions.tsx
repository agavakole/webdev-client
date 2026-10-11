export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This is a long sentence inside a box that is only 120 by 60 pixels so
          you can see the size stays fixed
        </div>

        <div className="wd-my-dimension wd-bg-color-gray">
          My own box: 180px wide and 100px tall
        </div>
      </div>
    </div>
  );
}
