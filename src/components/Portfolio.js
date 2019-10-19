import React from "react";
import Video from "./Video";
import Code from "./Code";

const Portfolio = props => {
  const [subpage, setSubpage] = React.useState("code");

  return (
    <section className={props.className}>
      <div className="content">
        {/*________________________________ TITLE ________________________________*/}
        <div className="subsection">
          <div className="row">
            <div className="col span_12 main-title">
              <h1>Portfolio</h1>
              <h3>What I can do</h3>
            </div>
          </div>
        </div>
        {/*________________________________ TOGGLE WORK/VIDEO ________________________________*/}
        <div>
          <div className="row">
            <div className="col span_12 work">
              <div className="discipline">
                <ul>
                  <li className={subpage === "code" ? "active-discipline" : ""}>
                    <button onClick={() => setSubpage("code")}>Code</button>
                  </li>
                  <li
                    className={subpage === "video" ? "active-discipline" : ""}
                  >
                    <button onClick={() => setSubpage("video")}>Video</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="subsection">
          {subpage === "code" && <Code className={subpage} />}
          {subpage === "video" && <Video className={subpage} />}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
