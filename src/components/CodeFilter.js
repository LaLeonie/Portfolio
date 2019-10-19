import React from "react";

const CodeProjectFilter = ({ codeFilter, setCodeFilter }) => {
  const handleChange = event => setCodeFilter(event.target.value);

  return (
    <form className="code-form">
      <input
        id="all-coding"
        type="radio"
        name="codingProject"
        value="all"
        checked={codeFilter === "all"}
        onChange={handleChange}
      />
      <label className="border-right" for="all-coding">
        All
      </label>

      <input
        id="solo-coding"
        type="radio"
        name="codingProject"
        value="solo"
        checked={codeFilter === "solo"}
        onChange={handleChange}
      />
      <label className="border-right" for="solo-coding">
        Solo
      </label>

      <input
        id="team-coding"
        type="radio"
        name="codingProject"
        value="team"
        checked={codeFilter === "team"}
        onChange={handleChange}
      />
      <label for="team-coding">Team</label>
    </form>
  );
};

export default CodeProjectFilter;
