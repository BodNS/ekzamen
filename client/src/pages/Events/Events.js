import React, { useState} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import AddEventForm from '../../components/Events';

const Events = (props) => { 
    
    const localStorageValue = JSON.parse(localStorage.getItem("eventsList")) ?? [];

    const addEvent = () => {
        document.querySelector("#form").style.display = "flex";
    }

    return (
<div className={styles.eventsPage}>
    <button onClick={addEvent} className={styles.addEventBtn}> Add Event </button>
    <AddEventForm localStorageValue={localStorageValue}/>
</div>
    )}

export default  Events;