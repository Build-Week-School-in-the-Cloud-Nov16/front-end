import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const VolunteerCard = () => {
    const [volunteerData, setVolunteerData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/users/filter?role=volunteer')
            .then(res => {
                console.log("VOLUNTEERS", res)
                setVolunteerData(res.data.data)
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
                    <h5>Volunteer's Username: {volunteer.username}</h5>
                </div>
            ))}
        </div>
    )
}

export default VolunteerCard;