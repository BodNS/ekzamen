import React, { useState, useEffect } from 'react';
import styles from '../../pages/HowItWorks/HowItWorks.module.sass';

const FaqLi = (props) =>{

    const [isOpen, setIsOpen] = useState(false);
    const {lis, openLiIndex} = props;

    const openLi = () => 
        setIsOpen(!isOpen)
    

    return (
        
    lis.map ((elem, index = 0) => (
    <li key = {elem.id}>
        <button onClick={openLi} className={styles.headerLi}>{elem.header}</button>
        {index === openLiIndex && <div className={styles.bodyLi}>{elem.body}</div>}
    </li>
))
)}

    export default FaqLi;