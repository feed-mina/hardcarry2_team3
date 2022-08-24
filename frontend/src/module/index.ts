import { combineReducers } from "redux";
import counter from "./counter";
//NOTE: 리듀서가 하나 뿐이지만 추후 다른 리듀서를 더 만들 것이므로 루트 리듀서를 만듦

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

/*: RootState 라는 타입을 만들어서 내보내주어야 한다.
/*: 이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때
/*: 스토어에서 관리하고 있는 상태를 조회하기 위해서
/*: useSelector를 사용 할 때 필요로 한다. */
