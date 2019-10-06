import React from "react";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact/Contact";

const Main = ({ page }) => {
  return (
    <main className="col span_9 main">
      {page === "about" && <About className={page} />}
      {page === "resume" && <Resume className={page} />}
      {page === "portfolio" && <Portfolio className={page} />}
      {page === "contact" && <Contact className={page} />}
    </main>
  );
};

export default Main;
