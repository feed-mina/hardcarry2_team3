// modules/counter.ts// #: 리덕스 모듈 작성//NOTE: 액션 type 선언
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

//NOTE: 액션 생성 함수 선언// return 생략할 수 있어서 화살표 함수 이용
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

/*NOTE: 액션 객체들에 대한 type 준비하기
 * ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입 */
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

//NOTE: 상태의 타입과 상태의 초깃값 선언하기// 리덕스의 상태의 타입을 선언할 때는 type or interface
type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

//NOTE: 리듀서 작성하기, useReducer와 비슷하다.// 함수의 반환 타입에 상태의 타입을 넣는 것을 잊지 마라
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
