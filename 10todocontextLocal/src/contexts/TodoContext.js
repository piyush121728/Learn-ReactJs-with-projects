import React, { useContext } from "react";
import { createContext } from "react";

// Step 1 : Create context object using 'createContext' function. This context hold the data that we want to share
export const TodoContext = createContext({
    todos: [{
        id: 1,
        title: "Todo msg",
        completed: false,
    }],
    addTodo: (todo) => { }, //adding new todo to the list
    updateTodo: (id, todo) => { }, //updating todo of list
    deleteTodo: (id) => { }, //deleted todo from list
    toggleComplete: (id) => { }, //mark todo as completed
});

//Step 2 : Provide context to the child component via 'Provider' component.
export const TodoContextProvider = TodoContext.Provider;


//Step 3 : We can use the useContext hook to access the data from UserContext provider
export const useTodo = () => {
    return useContext(TodoContext);
}