import React from "react";
import videoData from "../videoData";

const VideoProjectList = ({ videoFilter }) => {
  let filteredProjects;

  videoFilter === "all"
    ? (filteredProjects = videoData)
    : (filteredProjects = videoData.filter(el => el.category === videoFilter));

  return (
    <ul className="sample-work">
      {filteredProjects.length ? (
        filteredProjects.map(el => (
          <li className="sample-work-item" key={el.name}>
            <div className="item web">
              <a href={el.link} target="_blank">
                <div className="desc">
                  <div className="desc-content">
                    <h5>{el.name}</h5>
                    <span>{el.description}</span>
                  </div>
                </div>
                <img src={el.image} alt={el.alt} />
              </a>
            </div>
          </li>
        ))
      ) : (
        <li className="sample-work-item">No Projects Found</li>
      )}
    </ul>
  );
};

export default VideoProjectList;
