import React from 'react';
import styles from '../../pages/HowItWorks/HowItWorks.module.sass';

const FaqLi = (props) =>{

    const {lis, buttonId, openId, onButtonClick} = props;
   
    return (
       
    lis.map ((elem) => (
    <li key = {elem.id}>
        <button id = {buttonId} onClick={() => onButtonClick(elem.id, buttonId)} className={styles.headerLi}>{elem.header}</button>
        { openId === elem.id && <div className={styles.bodyLi} dangerouslySetInnerHTML={{__html: elem.body}} ></div>}
    </li>
))

)}

    export default FaqLi;