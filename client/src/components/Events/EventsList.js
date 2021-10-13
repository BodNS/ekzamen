import React from 'react';
import styles from '../../pages/Events/Events.module.sass';
import EventItem from './EventItem';

const EventsList = (props) => { 

    const {eventsList} = props;

    

return (
<div>
    EventsListComponent
    <ul>
    {eventsList.map((elem, index) => {

        return (
            <li key={index}>
                <EventItem item={elem} />
            </li> 
        )
    }
    )
    } 
    </ul>
</div>
)}

export default EventsList;