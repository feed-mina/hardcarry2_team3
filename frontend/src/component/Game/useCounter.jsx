//useCounter.tsx// ❤ : 프리젠테이셔널 / 컨테이너 분리를 하지 않고 작성하는 방법?// ❤ : Hooks let me do the same thing without an arbitrary division".// ❤ : 컴포넌트를 사용 할 때 props 로 필요한 값을 받아와서 사용하게 하지 말고,// ❤ : useSelector와 useDispatch로 이루어진 커스텀 Hook을 만들어서 이를 사용// ❤ : 컨테이너랑 똑같이 생긴 걸 useCounter 훅으로 만듦
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import counter from "../../module/counter";
import { increase } from "../../module";

function useCounter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);

  return { count, onIncrease };
}

export default useCounter;
