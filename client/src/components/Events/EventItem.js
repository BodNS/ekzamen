import React, {useEffect, useState} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import {getTimeRemaining} from './functions';

const EventItem = (props) => { 

    const {item, index, deleteEvent} = props;

    const [timeLeft, setTimeLeft] = useState(Date.parse(item.warnFor) - Date.now());
    

    const alertTime = getTimeRemaining(timeLeft);
    console.log(item.event, item.warnFor, Date.parse(item.warnFor) - Date.now(), timeLeft, alertTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            // deleteEvent(index);
        return alert(`Событие ${item.event} произошло!`)}
        const timerId = setInterval(() => setTimeLeft(timeLeft-1000), 5000)
        return () => clearInterval(timerId);
    });

return (
<div>
    <span> {item.event} </span>
    <span> {alertTime.days}d {alertTime.hours}h {alertTime.minutes}m {alertTime.seconds}s</span>
</div>
)}

export default EventItem;