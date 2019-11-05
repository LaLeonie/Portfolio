import React from "react";
import VideoFilter from "./VideoFilter";
import VideoProjectList from "./VideoProjectList.js";

const Video = props => {
  const [videoFilter, setVideoFilter] = React.useState("all");

  return (
    <div className={props.className}>
      <div className="row">
        <div className="col span_12">
          <VideoFilter
            videoFilter={videoFilter}
            setVideoFilter={setVideoFilter}
          />
        </div>
      </div>
      <div className="row">
        <div className="col span_12">
          <VideoProjectList videoFilter={videoFilter} />
        </div>
      </div>
    </div>
  );
};

export default Video;
