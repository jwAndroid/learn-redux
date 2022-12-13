/**
 * @format
 */

import React, {memo} from 'react';
import {Provider} from 'react-redux';

import {store} from './src/slice/store';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

export default memo(App);

/**
 * 상태값을 저장하는 저장소 : 스토어(Store)
스토어(Store)는 모든 상태 값을 저장하며 상태 값을 조작할 리듀서(Reducer) 함수를 인자로 받습니다.
상태를 조작하는 함수 : 리듀서(Reducer)

리듀서(Reducer) 함수는 초기 상태 값과 액션(action)을 인자로 받아 액션에 조작할 상태(State)를 지정하는 역할을 합니다.

액션을 전달하는 함수 : 디스패처 함수(Dispatcher)
디스패처(Dispatcher) 함수는 액션 값과 상태에 관한 데이터를 리듀서(Reducer) 함수에 전달하는 역할을 합니다.

어떤 변화가 필요할 때 발생시키는 신호 객체 : 액션(Action)
어떤 데이터를 어떻게 바꿀 것이냐에 대한 일종의 신호를 의미합니다. 어떤 동작에 대해 선언된 액션(Action) 객체는 type이라는 필드를 변화가 필요한 상황을 인지하기위해 사용하며 이 객체에 변화할 때 필요한 데이터를 담을 수도 있습니다.

액션을 주어서 디스패처 함수를 실행시키고 리듀서 함수로 스토어의 상태값을 CRUD 한다.
 *
 */
