import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>

      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        A second sample paragraph styled with the style attribute.
      </p>

      {/* green background, yellow text */}
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This paragraph has a green background and yellow text.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>

        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>

        <p id="wd-ai-id-selector">
          A sample paragraph with its own id and colors.
        </p>

        {/* paragraph with a unique ID */}
        <p id="wd-id-selector-3">
          This paragraph is styled using its own ID selector in index.css.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>

        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>

        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>

        <p className="wd-ai-class-selector">
          A sample paragraph sharing a second class.
        </p>

        <h4 className="wd-ai-class-selector">
          A sample heading sharing that class.
        </h4>

        {/* paragraph and heading sharing the same class */}
        <p className="wd-your-class">This paragraph uses my own CSS class.</p>

        <h4 className="wd-your-class">This heading uses the same CSS class.</h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>

          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              <span className="wd-ai-selector-5">
                A sample nested span styled by a descendant rule.
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
            {/* another nested element with a class */}
            <p className="wd-your-nested">
              This paragraph is nested inside the document structure selectors.
              <span>
                This span is inside the paragraph and can have its own style.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade">
        <h3>Cascade</h3>

        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Tag, class and id rules all set my background. The id wins (red).
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
    </div>
  );
}
