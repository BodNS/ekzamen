import React, {useEffect, useState} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import {getTimeRemaining} from './functions';

const EventItem = (props) => { 

    const {item} = props;
    
    const alertTime = getTimeRemaining(item.warnFor);

    useEffect(() => {
            if (alertTime.total > 0)
        const timerId = setInterval(() => alertTime, 1000)
            else 
            alert(`Событие ${item.event} произошло!`);
        return () => clearInterval(timerId);
    });

return (
<div>
    <span> {item.event} </span>
    <span> {alertTime.days}d {alertTime.hours}h {alertTime.minutes}m {alertTime.seconds}s</span>
</div>
)}

export default EventItem;