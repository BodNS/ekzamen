import React, {useEffect, useState, useContext, useRef} from 'react';
import styles from '../../pages/Events/Events.module.sass';
import {getTimeRemaining, progressBar} from './functions';
import Context from './context';
import Modal from './Modal';


const EventItem = (props) => { 

    const {item, deleteEvent} = props;

    const value = useContext(Context);
    
    const progressBarWidth = useRef();

    const [timeLeft, setTimeLeft] = useState(() => Date.parse(item.warnFor) - Date.now());

    const alertTime = getTimeRemaining(timeLeft);
    // console.log(item.event, item.warnFor, Date.parse(item.warnFor) - Date.now(), timeLeft, alertTime);

    useEffect(() => {
        if (timeLeft <= 0) {
            deleteEvent();
            value.setUpdateEventList((prev) => prev + 1);
            return <Modal nameEvent={item.event}/> }
        const timerId = setInterval(() => setTimeLeft(timeLeft-1000), 1000)
        progressBar(item, progressBarWidth);
        return () => clearInterval(timerId);
    });

return (
    <div className={styles.eventItem}>
        <div className={styles.eventItemProgressBar} ref={progressBarWidth}></div>
            <span> {item.event} </span>
            <span> {alertTime.days}d {alertTime.hours}h {alertTime.minutes}m {alertTime.seconds}s</span>
        
    </div>
    )}


export default EventItem;