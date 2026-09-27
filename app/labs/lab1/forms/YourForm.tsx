export default function YourForm() {
  return (
    <form id="wd-your-form" onSubmit={(e) => e.preventDefault()}>
      <h4>Student Profile</h4>
      <label htmlFor="wd-your-first-name">First name:</label>
      <input id="wd-your-first-name" defaultValue="Kole" />
      <br />
      <label htmlFor="wd-your-last-name">Last name:</label>
      <input id="wd-your-last-name" defaultValue="Agava" />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input id="wd-your-password" type="password" placeholder="password" />
      <br />
      <label htmlFor="wd-your-bio">Why I am taking this course:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={4}
        defaultValue="I am from Nigeria and studying for my MS in Computer Science at Northeastern. I want to build full-stack web applications with React, Next.js, Node.js and MongoDB."
      />
      <br />
      Class standing:
      <br />
      <input type="radio" name="your-standing" id="wd-your-undergrad" />
      <label htmlFor="wd-your-undergrad">Undergraduate</label>
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />
      Enrollment:
      <br />
      <input
        type="radio"
        name="your-enrollment"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <input type="radio" name="your-enrollment" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />
      Interests:
      <br />
      <input type="checkbox" id="wd-your-web" defaultChecked />
      <label htmlFor="wd-your-web">Software development</label>
      <input type="checkbox" id="wd-your-cloud" defaultChecked />
      <label htmlFor="wd-your-cloud">Cloud / DevOps</label>
      <input type="checkbox" id="wd-your-networking" defaultChecked />
      <label htmlFor="wd-your-networking">Networking</label>
      <br />
      <label htmlFor="wd-your-major">Major:</label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="IS">Information Systems</option>
        <option value="CY">Cybersecurity</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen this term:</label>
      <br />
      <select id="wd-your-topics" multiple defaultValue={["REACT", "MONGO"]}>
        <option value="REACT">React</option>
        <option value="NEXT">Next.js</option>
        <option value="NODE">Node.js</option>
        <option value="MONGO">MongoDB</option>
      </select>
      <br />
      <label htmlFor="wd-your-email">School email:</label>
      <input
        id="wd-your-email"
        type="email"
        placeholder="agava.k@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-grad-year">Expected graduation year:</label>
      <input
        id="wd-your-grad-year"
        type="number"
        defaultValue="2027"
        min={2025}
        max={2032}
      />
      <br />
      <label htmlFor="wd-your-start">Program start date:</label>
      <input id="wd-your-start" type="date" defaultValue="2024-09-01" />
      <br />
      <label htmlFor="wd-your-excitement">
        Excitement about this course (0-10):
      </label>
      <input
        id="wd-your-excitement"
        type="range"
        min="0"
        max="10"
        defaultValue="9"
      />
      <br />
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
