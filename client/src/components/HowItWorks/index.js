import React, { useState, useEffect } from 'react';
import styles from '../../pages/HowItWorks/HowItWorks.module.sass';

const FaqLi = (props) =>{

    const {lis, openId, onButtonClick} = props;

   
    return (
       
    lis.map ((elem) => (
    <li key = {elem.id}>
        <button onClick={() => onButtonClick(elem.id)} className={styles.headerLi}>{elem.header}</button>
        { openId === elem.id && <div className={styles.bodyLi}>{elem.body}</div>}
    </li>
))

)}

    export default FaqLi;