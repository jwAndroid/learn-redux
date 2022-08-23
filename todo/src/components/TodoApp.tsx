import React, { memo, useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  TextInput,
  Text,
  Pressable,
  ListRenderItem,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';

import { add, remove, Todo, toggle } from '../redux/slices/todos';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  inputWrapper: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  todos: {
    flex: 1,
  },
  todo: {
    flexDirection: 'row',
  },
  toggle: {
    justifyContent: 'center',
    flex: 1,
  },
  doneText: {
    textDecorationLine: 'line-through',
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
  },
  avoid: {
    flex: 1,
  },
});

function BlackButton({
  onPress,
  title,
}: {
  onPress(): void;
  title: string;
}) {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
      android_ripple={{ color: 'white' }}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

function TodoItem({ id, text, done }: Todo) {
  const dispatch = useDispatch();

  const onToggle = () => {
    dispatch(toggle(id));
  };

  const onRemove = () => {
    dispatch(remove(id));
  };

  return (
    <View style={styles.todo}>
      <Pressable onPress={onToggle} style={styles.toggle}>
        <Text style={done && styles.doneText}>{text}</Text>
      </Pressable>

      <BlackButton onPress={onRemove} title="remove" />
    </View>
  );
}

function Todos() {
  const data = useSelector((state: RootState) => state.todos);

  const renderItem = useCallback<ListRenderItem<Todo>>(({ item }) => {
    return (
      <TodoItem id={item.id} done={item.done} text={item.text} />
    );
  }, []);

  const ItemSeparatorComponent = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  const ListFooterComponent = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  return (
    <FlatList
      style={styles.todos}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={ItemSeparatorComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
}

function TodoInput() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(add(text));

    setText('');
  };

  const onChangeText = useCallback((text: string) => {
    setText(text);
  }, []);

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.input}
        placeholder="todo.."
        value={text}
        onChangeText={onChangeText}
      />

      <BlackButton onPress={onPress} title="submit" />
    </View>
  );
}

function TodoApp() {
  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({
          ios: 'padding',
          android: undefined,
        })}
        style={styles.avoid}>
        <Todos />

        <TodoInput />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default memo(TodoApp);
