import React from "react";

const VideoProjectFilter = ({ videoFilter, setVideoFilter }) => {
  const handleCatChange = event => setVideoFilter(event.target.value);

  return (
    <form className="code-form">
      <input
        id="all-video"
        type="radio"
        name="videoProject"
        value="all"
        checked={videoFilter === "all"}
        onChange={handleCatChange}
      />
      <label className="border-right" for="all-video">
        All
      </label>

      <input
        id="commercial-video"
        type="radio"
        name="codingProject"
        value="commercial"
        checked={videoFilter === "commercial"}
        onChange={handleCatChange}
      />
      <label className="border-right" for="commercial-video">
        Commercial
      </label>

      <input
        id="event-video"
        type="radio"
        name="codingProject"
        value="event"
        checked={videoFilter === "event"}
        onChange={handleCatChange}
      />
      <label className="border-right" for="event-video">
        Events
      </label>

      <input
        id="mograph-video"
        type="radio"
        name="codingProject"
        value="mograph"
        checked={videoFilter === "mograph"}
        onChange={handleCatChange}
      />
      <label for="mograph-video">Motion Graphics</label>
    </form>
  );
};

export default VideoProjectFilter;
