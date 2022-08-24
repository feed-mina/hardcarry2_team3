import React from "react";

const Vote = () => {
  return (
    <Wrapper>
      <input
        type="checkbox"
        checked={bChecked}
        onChange={(e) => checkHandler(e)}
      />{" "}
    </Wrapper>
  );
};
