import { useState, useEffect } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { View, Text } from "@/components/Themed";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  /**
   * Function to add todo to our list
   */
  const addTodo = () => {
    // TODO: implement functionality to add a new todo
  };

  /**
   * Function to delete a todo from our list
   */
  const deleteTodo = (id: number) => {
    //TODO: Implement functionality to delete a todo
  };

  return (
    <View style={styles.todoContainer}>
      <Text style={styles.header}>Todo List</Text>
      <View style={styles.addTodo}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new todo"
          value={"Add some todos!"}
          onChangeText={() => console.log('hello!')}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.todos}>
        {todos.map((todo) => (
          <View style={styles.todoItem} key={todo.id}>
            <Text>{todo.title}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addTodo: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    marginRight: 10,
    padding: 5,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  todos: {},
  todoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
