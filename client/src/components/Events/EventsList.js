import React from 'react';
import styles from '../../pages/Events/Events.module.sass';
import EventItem from './EventItem';
import {deleteEvent} from './functions';


const EventsList = (props) => { 

    const {eventsList} = props;


return (
<div className={styles.eventsList}>
    <span>EventsListComponent</span>
    <hr />
    <ul>
    {eventsList.map((elem, index) => {
        return (
            <li key={index}>
                <EventItem item={elem} index={index} deleteEvent={deleteEvent} />
            </li> 
        )}
    )} 
    </ul>
</div>
)}

export default EventsList;