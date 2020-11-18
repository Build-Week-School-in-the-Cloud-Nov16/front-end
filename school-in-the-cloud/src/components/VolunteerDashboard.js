import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const VolunteerDashboard = () => {
    const [currentTasks, setCurrentTasks] = useState([]);

    useEffect(()=> {
        axiosWithAuth() 
            .get('/tasks')
            .then(res => {
                console.log("TASKS DATA", res)
                setCurrentTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
        console.log(currentTasks);

    return (
        <div>
            <h1>Volunteer Dashboard</h1>
            {currentTasks.map(task => (
                <div>
                    <p>{task.title}</p>
                    <p>{task.description}</p> 
                </div>
                // Will need to change this to correct API
            ))}
        </div>
    )
}

export default VolunteerDashboard;