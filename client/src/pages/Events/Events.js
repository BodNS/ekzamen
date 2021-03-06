import React, { useState, useEffect} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import {AddEventForm, EventsList} from '../../components/Events';
import Context from '../../components/Events/context';

const EventsPage = (props) => { 

    const [updateEventList, setUpdateEventList] = useState(0);

    
    const localStorageValue = JSON.parse(localStorage.getItem("eventsList")) ?? [];    

    const addEvent = () => {
        document.querySelector("#form").style.display = "flex";
    }

    const value = {
        setUpdateEventList
    }

    return (
        <Context.Provider value={value}>
            <div className={styles.eventsPage}>
                <button onClick={addEvent} className={styles.addEventBtn}> Add Event </button>
                <AddEventForm localStorageValue={localStorageValue} /*  updEventListFn={setUpdateEventList} *//>
                <EventsList eventsList={localStorageValue} />
            </div>
        </Context.Provider>
   

    )}

export default  EventsPage;
