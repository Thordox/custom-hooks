import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

const initializer = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = (initialState = []) => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, initializer);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleNewTodo = (todo) => {
        //console.log({ todo });
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        //console.log(id)
        const action = {
            type: '[TODO] Delete Todo',
            payload: id,
        }

        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Complete Todo',
            payload: id,
        }

        dispatch(action)
    }


  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
}
