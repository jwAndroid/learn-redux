import React, {memo, useCallback, useMemo} from 'react';
import {View, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from '../slice/hooks';
import {add, fullfiled, remove, update} from '../slice/list/slice';

const sampleData = [
  {id: 1, text: '123'},
  {id: 2, text: '1234'},
  {id: 3, text: '1235'},
  {id: 4, text: '123123'},
  {id: 5, text: '121243'},
  {id: 6, text: '121243'},
];

function ListScreen() {
  const dispatch = useAppDispatch();

  const post = useAppSelector(state => state.list);

  const isFirst = useMemo(() => post.length === 0, [post]);

  const onPress = useCallback(() => {
    dispatch(
      add({
        id: isFirst ? 1 : post[post.length - 1].id + 1,
        text: 'hihi',
      }),
    );
  }, [dispatch, post, isFirst]);

  const onRemove = useCallback(() => {
    dispatch(remove(2));
  }, [dispatch]);

  const onRead = useCallback(() => {
    console.log(JSON.stringify(post, null, 5));
  }, [post]);

  const onModify = useCallback(() => {
    const prepared = {
      id: 3,
      text: '수정!',
    };

    dispatch(update(prepared));
  }, [dispatch]);

  const onFullfiled = useCallback(() => {
    dispatch(fullfiled(sampleData));
  }, [dispatch]);

  return (
    <View>
      <Text style={{fontSize: 30, margin: 10}} onPress={onPress}>
        데이터 추가
      </Text>

      <Text style={{fontSize: 30, margin: 10}} onPress={onFullfiled}>
        여러 데이터 추가
      </Text>

      <Text style={{fontSize: 30, margin: 10}} onPress={onRemove}>
        2번 제거
      </Text>

      <Text style={{fontSize: 30, margin: 10}} onPress={onRead}>
        데이터 조회
      </Text>

      <Text style={{fontSize: 30, margin: 10}} onPress={onModify}>
        데이터 수정
      </Text>
    </View>
  );
}

export default memo(ListScreen);
