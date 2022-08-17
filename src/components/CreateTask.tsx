
import { useState } from "react";
import axios from "axios";

interface TaskInput {
    task: string,
    completed: boolean
}

export default function CreateTask(): JSX.Element{
    const [newTask, setNewTask] = useState<TaskInput>({task:"", completed: false})
    

    const baseUrl = process.env.NODE_ENV === "production"
	? "http://when-its-ready.herokuapp.com"
	: "http://localhost:4000"

    const handlerInput = () => {
        axios.post(`${baseUrl}/items`, newTask)
    }

    return(
        <>
            <input type="text" value={newTask.task} onChange={(event)=>{setNewTask({task: event.target.value, completed: newTask.completed})}}/>
            <button onClick={handlerInput}>Add Task</button>
        </>
    )
}