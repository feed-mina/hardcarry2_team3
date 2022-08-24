import React from "react";

const VoteList = () => {
  const issues = [...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(issue.id, target.checked);
  };
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };
  return (
    <>
      <Header>
        <input type="checkbox" />
      </Header>
      <List>
        {issues.map((issue, index) => (
          <Vote key={index} />
        ))}
        ;
      </List>
    </>
  );
};

export default VoteList;
