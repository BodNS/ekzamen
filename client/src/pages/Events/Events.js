import React, { useState} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import AddEventForm from '../../components/Events';

const Events = (props) => { 
    const addEvent = () => {

    }

    return (
<div>
    <button onClick={addEvent} className={styles.addEventBtn}> Add Event </button>
    <AddEventForm />
</div>
    )}

export default  Events;