import { useState } from "react";
const Issue = () => {
  const IssueList = () => {
    return (
      <>
        <div>
          <input type="checkbox" />
        </div>
      </>
    );
  };
  const issues = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div>
      <>
        <div>
          <input type="checkbox" />
        </div>
        <div>
          {issues.map((issue, index) => (
            <Issue key={index} />
          ))}
        </div>
      </>{" "}
    </div>
  );
};

export default Issue;
