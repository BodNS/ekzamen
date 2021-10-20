import React from 'react';
import { v4 as uuidv4 } from 'uuid';
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
            <li key={uuidv4()}>
                <EventItem item={elem} deleteEvent={(index) => deleteEvent(index)} />
            </li> 
        )}
    )} 
    </ul>
</div>
)}

export default EventsList;