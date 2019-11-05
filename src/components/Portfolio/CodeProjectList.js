import React from "react";
import codeData from "../../data/codeData";

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
              <a href={el.link}>
                <div className="desc">
                  <div className="desc-content">
                    <h6>{el.name}</h6>
                    <span>{el.description}</span>
                    <span className="tech-stack">
                      {el.tech.map(elem => (
                        <img src={elem} key={elem} alt={el.name} />
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
