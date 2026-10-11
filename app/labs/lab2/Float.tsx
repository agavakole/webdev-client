const STARSHIP = "https://picsum.photos/id/1002/300/200";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={STARSHIP} alt="Starship" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={STARSHIP} alt="Starship" />
        <div className="wd-float-done" />
      </div>
      <div>
        <div
          id="wd-ai-float"
          className="wd-float-right wd-dimension-square wd-bg-color-green wd-fg-color-white"
        >
          AI float
        </div>
        {LOREM}
        <div className="wd-float-done" />
      </div>
      <div className="wd-float-left wd-dimension-square wd-bg-color-yellow">
        My left float
      </div>
      {LOREM} {LOREM}
      <div className="wd-float-done" />
    </div>
  );
}
