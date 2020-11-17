import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const VolunteerDashboard = () => {
    const [currentTasks, setCurrentTasks] = useState([])

    useEffect(()=> {
        axiosWithAuth() 
            .get('/api/tasks')
            .then(res => {
                console.log(res)
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
                <p>{task.task}</p>
                // Will need to change this to correct API
            ))}
        </div>
    )
}

export default VolunteerDashboard;