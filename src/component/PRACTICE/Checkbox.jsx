import React from "react";

const Checkbox = () => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(issue.id, target.checked);
  };
  const allCheckHandler = () => setChecked(isAllChecked);

  useEffect(() => allCheckHandler(), [isAllChecked]);

  // 컴포넌트 쌓여진 부분 생략
  <input
    type="checkbox"
    checked={bChecked}
    onChange={(e) => checkHandler(e)}
  />;
  return (
    <Wrapper>
      <input type="checkbox" />
    </Wrapper>
  );
};

export default Checkbox;
