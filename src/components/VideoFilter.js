import React from "react";

const VideoProjectFilter = ({ videoFilter, setVideoFilter }) => {
  const handleCatChange = event => setVideoFilter(event.target.value);

  return (
    <form className="code-form">
      <label>
        <div>All</div>
        <input
          type="radio"
          name="videoProject"
          value="all"
          checked={videoFilter === "all"}
          onChange={handleCatChange}
        />
      </label>
      <label>
        <div>Commercial</div>
        <input
          type="radio"
          name="codingProject"
          value="commercial"
          checked={videoFilter === "commercial"}
          onChange={handleCatChange}
        />
      </label>
      <label>
        <div>Events</div>
        <input
          type="radio"
          name="codingProject"
          value="event"
          checked={videoFilter === "event"}
          onChange={handleCatChange}
        />
      </label>
      <label>
        <div>Motion Graphics</div>
        <input
          type="radio"
          name="codingProject"
          value="mograph"
          checked={videoFilter === "mograph"}
          onChange={handleCatChange}
        />
      </label>
    </form>
  );
};

export default VideoProjectFilter;
