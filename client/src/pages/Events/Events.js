import React, { useState} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import AddTaskForm from '../../components/Events';

const Events = (props) => { 
    const addTask = () => {

    }

    return (
<div>
    <button onClick={addTask} className={styles.addTaskBtn}> Add Task </button>
    <AddTaskForm />>
</div>
    )}

export default  Events;