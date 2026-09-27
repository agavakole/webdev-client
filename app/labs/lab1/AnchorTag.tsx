export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/agavakole/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      <a id="wd-your-link" href="https://www.indeed.com">
        Indeed
      </a>
      <br />
      <a
        id="wd-your-github"
        href="https://github.com/agavakole"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub
      </a>
      <br />
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
