import React, { useState } from 'react';

const initialFormValues = {
    task: ""
}

const AdminDashboard = () => {
    const [formValues, setFormValues] = useState(initialFormValues)

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <form>
                <label>Make Tasks:
                    <input 
                        type='textarea'
                        name='task'
                        value={formValues.task}
                        onChange={handleChange}
                    />
                </label>
                <br></br>
                <button>Add a Task</button>
            </form>
        </div>
    )
}

export default AdminDashboard;