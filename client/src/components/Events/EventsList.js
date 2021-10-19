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
            <li key={Math.random()+index}>
                <EventItem item={elem} index={index} deleteEvent={(index) => deleteEvent(index)} />
            </li> 
        )}
    )} 
    </ul>
</div>
)}

export default EventsList;