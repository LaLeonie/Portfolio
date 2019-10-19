import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./css/base.css";
import "./css/layout.css";
import "./css/main.css";
import "./css/queries.css";

function App() {
  const [page, setPage] = React.useState("about");

  React.useEffect(() => {}, [page]);

  return (
    <div id="wrapper" className="wrapper">
      <div className="row">
        <Header page={page} setPage={setPage} />
        <Main page={page} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
