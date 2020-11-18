import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const VolunteerCard = () => {
    const [volunteerData, setVolunteerData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/users/filter?role=volunteers')
            .then(res => {
                console.log("VOLUNTEERS", res)
                setVolunteerData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return(
        <div>
            <h3>Volunteers</h3>
            {volunteerData.map(volunteer => (
                <div>
                    <p>{volunteer.username}</p>
                </div>
            ))}
        </div>
    )
}

export default VolunteerCard;