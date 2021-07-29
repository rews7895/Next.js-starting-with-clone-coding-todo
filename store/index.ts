import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import todo from "./todo";

const rootReducer = combineReducers({
  todo,
});

const reducer = (state: any, action: any) => {
  // HYDRATE: 서버에서 생성된 리덕스 스토어를 클라이언트에서 사용할 수 있도록 전달해주는 역할을 한다.
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  }
  return rootReducer(state, action);
};

//* 스토어의 타입
// 스토어의 타입을 루트 리듀서로부터 얻을 수 있다.
export type RootState = ReturnType<typeof rootReducer>;

//* 미들워어 적용을 위한 스토어 enhancer
// 리덕스에서 미들웨어는 액션이 디스패치되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미한다.
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// 리듀서와 미들웨어로 리덕스 스토어를 만들어 리턴하게 된다.
const initStore = () => {
  return createStore(reducer, bindMiddleware([]));
};

export const wrapper = createWrapper(initStore);
