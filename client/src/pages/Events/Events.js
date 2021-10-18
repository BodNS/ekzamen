import React, { useState, useEffect} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import {AddEventForm, EventsList} from '../../components/Events';

const EventsPage = (props) => { 

    /* const [localStorageValue, setLocalStorageValue] = useState(() => JSON.parse(localStorage.getItem("eventsList")) ?? []);
    
    const getLocalStorageValue = () =>
        setLocalStorageValue (JSON.parse(localStorage.getItem("eventsList")) ?? []) */

    const localStorageValue = JSON.parse(localStorage.getItem("eventsList")) ?? [];    

    const addEvent = () => {
        document.querySelector("#form").style.display = "flex";
    }

    /* useEffect(() => {
        window.addEventListener('storage', getLocalStorageValue);
        getLocalStorageValue ();
        return () => window.removeEventListener("storage", getLocalStorageValue); 
    }, [localStorageValue]) */

    return (
<div className={styles.eventsPage}>
    <button onClick={addEvent} className={styles.addEventBtn}> Add Event </button>
    <AddEventForm localStorageValue={localStorageValue}  />
    <EventsList eventsList={localStorageValue} />
   
</div>
    )}

export default  EventsPage;