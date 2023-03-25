import { useState, useEffect } from 'react';

export default function useToDoList(initialValue) {
    const [tasks, setTasks] = useState(initialValue);
    return {
        tasks, 
        setTasks,
        addTask: (values) => {
            const newTask = {
                id: Date.now(),
                body: values.body,
                isDone: false
            }
            setTasks([...tasks, newTask])      
        },
        setDoneTask: () => {}, //map
        deleteTask: (id) => {
            setTasks(tasks.filter(task => task.id !== id))
        }, //filter
    }
}