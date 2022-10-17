import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}



export type FilterValuesType = "all" | "active" | "completed"

function App() {
    // BLL:
    const todoListTitle: string = "What to learn";

const result = React.useState<Array<TaskType>> ([
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JS & TS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
    ])

console.log(result);
const tasksForTodoList = result[0]
const setTasksForTodoList = result[1]

const removeTask = (taskId: number) => {
    // const copyState = [...tasksForTodoList]
    // let taskIndex;
    // for (let i = 0; i < copyState.length; i++) {
    //     if (copyState[i].id === taskId) {
    //         taskIndex = i
    //     }
    // }
    // if (taskIndex) {
    //     copyState.splice(taskIndex, 1)
    setTasksForTodoList(tasksForTodoList.filter(t => t.id !== taskId))
    // console.log(tasksForTodoList)
}

const [filter, setFilter] = React.useState<FilterValuesType>("all")

const changeFilter = (fiter: FilterValuesType) => {
    setFilter(filter)
}

let filteredTasks = tasksForTodoList

if (filter === "active") {
    filteredTasks = tasksForTodoList.filter(t => t.isDone === false)
}
if (filter === "completed") {
    filteredTasks = tasksForTodoList.filter(t => t.isDone === true)
}


// GUI:

    return (
        <div className="App">
            <TodoList
                title={todoListTitle}
                tasks={filteredTasks}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;