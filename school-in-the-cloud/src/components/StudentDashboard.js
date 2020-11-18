import React from 'react';

import StudentSearchBar from './StudentSearchBar';
import VolunteerCard from './VolunteerCard';

const StudentDashboard = () => {

    return (
        <div>
            <h1>Student Dashboard</h1>
            <StudentSearchBar />
            <VolunteerCard />
        </div>
    )
}

export default StudentDashboard;