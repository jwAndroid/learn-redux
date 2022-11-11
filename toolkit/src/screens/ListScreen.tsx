import React, {memo, useCallback} from 'react';
import {View, Text} from 'react-native';

import {useAppDispatch, useAppSelector} from '../slice/hooks';
import {add, remove, update} from '../slice/list/slice';

function ListScreen() {
  const dispatch = useAppDispatch();

  const post = useAppSelector(state => state.list);

  const onPress = useCallback(() => {
    dispatch(
      add({
        id: post[post.length - 1].id + 1,
        text: 'hihi',
      }),
    );
  }, [dispatch, post]);

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

  return (
    <View>
      <Text style={{fontSize: 30, margin: 10}} onPress={onPress}>
        데이터 추가
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
