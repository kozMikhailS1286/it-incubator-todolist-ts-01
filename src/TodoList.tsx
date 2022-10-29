import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import {FilterValuesType, TaskType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: Array<TaskType>
    addTask: (title: string) => void
    removeTask: (taskId: string) => void
    changeFilter: (filter: FilterValuesType) => void
}

const TodoList = (props: TodoListPropsType) => {

    const [title, setTitle] = useState("", )

    const tasksJSXItemList = props.tasks.length
    ? <ul>
            {props.tasks.map((task: TaskType) => {

                const removeTask = () => props.removeTask(task.id)

                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span> {task.title} </span>
                        <button onClick={removeTask}> x </button>
                    </li>
                );
            })
    } </ul>
    : <span> Your list is empty </span>


    const onClickAddTask = () => {
        const tremmedTitle = title.trim()
        if (tremmedTitle) {
            props.addTask(tremmedTitle)
        } 
        setTitle("")
    }

    const onChangeSetLocalTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const changeFilterHandlerCreator = (filter: FilterValuesType) => () => props.changeFilter(filter)
    const onKeyDownEnterAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onClickAddTask()

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetLocalTitle}
                    onKeyDown={onKeyDownEnterAddTask}
                />
                <button onClick={onClickAddTask}>+</button>
            </div>
            <ul>
                {tasksJSXItemList}
            </ul>
            <div>
                <button onClick={changeFilterHandlerCreator("all")}>All</button>
                <button onClick={changeFilterHandlerCreator("active")}> Active </button>
                <button onClick={changeFilterHandlerCreator("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;