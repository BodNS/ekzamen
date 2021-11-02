import React, {useEffect, useState, useContext} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import {getTimeRemaining} from './functions';
import Context from './context';


const EventItem = (props) => { 

    const {item, deleteEvent} = props;

    const value = useContext(Context);

    const progressBarWidth = document.querySelector('eventItem');

    const [timeLeft, setTimeLeft] = useState(() => Date.parse(item.warnFor) - Date.now());

    const alertTime = getTimeRemaining(timeLeft);
    // console.log(item.event, item.warnFor, Date.parse(item.warnFor) - Date.now(), timeLeft, alertTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            deleteEvent();
            value.setUpdateEventList((prev) => prev + 1);
            return alert(`Событие ${item.event} произошло!`)}

                const progressBar = ()

        const timerId = setInterval(() => setTimeLeft(timeLeft-1000), 1000)
        return () => clearInterval(timerId);
    });

return (
<div className={styles.eventItem}>
    <span> {item.event} </span>
    <span> {alertTime.days}d {alertTime.hours}h {alertTime.minutes}m {alertTime.seconds}s</span>
</div>
)}


export default EventItem;