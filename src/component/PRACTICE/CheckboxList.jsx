import Checkbox from "./Checkbox";

const CheckboxList = () => {
  const issues = [...Array(6).keys()]; // [0, 1, 2, 3, 4, 5, 6]
  const [checkedItems, setCheckedItems] = useState(new Set());
  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
    const [isAllChecked, setIsAllChecked] = useState(false);

    const allCheckedHandler = (isChecked) => {
      if (isChecked) {
        setCheckedItems(new Set(issues.map(({ id }) => id)));
        setIsAllChecked(true);
      } else {
        checkedItems.clear();
        setCheckedItems(setCheckedItems);
        setIsAllChecked(false);
      }
    };
  };

  return (
    <>
      <div>
        <input type="checkbox" />
      </div>
      <div>
        {issues.map((issue, index) => (
          <Checkbox key={index} />
        ))}
      </div>
    </>
  );
};

export default CheckboxList;
