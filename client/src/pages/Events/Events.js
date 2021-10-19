import React, { useState, useEffect} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import {AddEventForm, EventsList} from '../../components/Events';

const EventsPage = (props) => { 

    const [updateEventList, setUpdateEventList] = useState(0);

    const updEventListFn = (count) => setUpdateEventList (updateEventList + count);
    
    const localStorageValue = JSON.parse(localStorage.getItem("eventsList")) ?? [];    

    const addEvent = () => {
        document.querySelector("#form").style.display = "flex";
    }

    useEffect(() => {
        
    }, [updateEventList])

    return (
<div className={styles.eventsPage}>
    <button onClick={addEvent} className={styles.addEventBtn}> Add Event </button>
    <AddEventForm localStorageValue={localStorageValue}  updEventListFn={updEventListFn}/>
    <EventsList eventsList={localStorageValue} />
   
</div>
    )}

export default  EventsPage;