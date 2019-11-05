import React from "react";
import CodeProjectFilter from "./CodeFilter";
import CodeProjectList from "./CodeProjectList";

const Code = props => {
  const [codeFilter, setCodeFilter] = React.useState("all");

  return (
    <div className={props.className}>
      <div className="row">
        <div className="col span_12">
          <CodeProjectFilter
            codeFilter={codeFilter}
            setCodeFilter={setCodeFilter}
          />
        </div>
      </div>
      <div className="row">
        <div className="col span_12">
          <CodeProjectList codeFilter={codeFilter} />
        </div>
      </div>
    </div>
  );
};

export default Code;
