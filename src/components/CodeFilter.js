import React from "react";

const CodeProjectFilter = ({ codeFilter, setCodeFilter }) => {
  const handleChange = event => setCodeFilter(event.target.value);

  return (
    <form className="code-form">
      <label>
        <div>All</div>
        <input
          type="radio"
          name="codingProject"
          value="all"
          checked={codeFilter === "all"}
          onChange={handleChange}
        />
      </label>
      <label>
        <div>Solo</div>
        <input
          type="radio"
          name="codingProject"
          value="solo"
          checked={codeFilter === "solo"}
          onChange={handleChange}
        />
      </label>
      <label>
        <div>Team</div>
        <input
          type="radio"
          name="codingProject"
          value="team"
          checked={codeFilter === "team"}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default CodeProjectFilter;
