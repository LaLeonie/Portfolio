import React from "react";
import codeData from "../codeData";

const CodeProjectList = ({ codeFilter }) => {
  let filteredProjects;

  codeFilter === "all"
    ? (filteredProjects = codeData)
    : (filteredProjects = codeData.filter(el => el.category === codeFilter));

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
                    <span className="tech-stack">
                      {el.tech.map(elem => (
                        <img src={elem} key={elem} />
                      ))}
                    </span>
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

export default CodeProjectList;
