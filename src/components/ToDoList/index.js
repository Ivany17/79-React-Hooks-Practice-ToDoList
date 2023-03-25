import { Field, Form, Formik } from 'formic';
import { useToDoList } from 'hooks';
import React from 'react';

const ToDoList = () => {
    const {tasks, setTasks, addTask, setDoneTask, deleteTask} = useToDoList([{
        id: Date.now(),
        body:'write to do list',
        isDone: false
    }])
    return (
        <div>
            <Formik initialValues={{body:''}} onSubmit={addTask} >
                <Form>
                    <Field name='body' />
                    <input type='submit' value='Add' />
                </Form>
            </Formik>
            <ul>
                {
                    tasks.map(task => {
                        return <li key={task.id}>{task.body}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default ToDoList;
