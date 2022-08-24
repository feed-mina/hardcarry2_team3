const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE";
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// export default function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return state + 1;
//     case DECREASE:
//       return state - 1;
//     default:
//       return state;
//   }
// }

/*NOTE: 액션 객체들에 대한 type 준비하기
 * ReturnType은 함수에서 반환하는 타입을 가져올 수 있게 해주는 유틸 타입 */
type CounterAction = ReturnType<typeof increase>;

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

    default:
      return state;
  }
}

export default counter;
