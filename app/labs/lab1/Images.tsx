export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzOb-16usYcieD6LmQ_0NHWjJBbYijqR7-hhS9cEdOQ&s=10"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        height="200px"
        src="/images/teslabot.jpg"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      <img
        id="wd-your-image"
        width="300px"
        alt="Cyber truck"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrZ7G2Lg7KieaoruBtAyWis3ozw6mesgroL8F2HnutvQ&s=10"
      />
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Earth seen from space"
        src="https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
      />
    </div>
  );
}
