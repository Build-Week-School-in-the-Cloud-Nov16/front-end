import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialFormValues = {
    title: "",
    description: ""
}

const AdminDashboard = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [tasks, setTasks] = useState([]);

    const history = useHistory();

    

    useEffect(() => {
        axiosWithAuth()
            .get('/tasks')
            .then(res => {
                console.log("TASKS", res)
                setTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const addTask = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/tasks', formValues)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteTask = (task) => {
        axiosWithAuth()
            .delete(`/tasks/${task.id}`)
            .then(res => {
                setTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <h3>Add a Task</h3>
            <form onSubmit={addTask}>
                <label>Title:
                    <input 
                        type='input'
                        name='title'
                        value={formValues.title}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <label>Description:
                    <input 
                        type='input'
                        name='description'
                        value={formValues.description}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <button>Add a Task</button>
            </form>

            <h4>Tasks</h4>
            {tasks.map(task => (
                <div>
                    <p>Title: {task.title}</p>
                    <p>Description: {task.description}</p>
                    <button onClick={() => history.push(`/edit-task/${task.id}`)}>Edit Task</button>
                    
                    <button onClick={e => {
                        e.stopPropagation();
                        deleteTask(task)
                    }}>
                        Delete Task
                    </button>
                </div>
            ))}
        </div>
    )
}

export default AdminDashboard;

// onClick={deleteTask}