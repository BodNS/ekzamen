import React from 'react';
import styles from '../../pages/HowItWorks/HowItWorks.module.sass';

const FaqLi = (props) =>{

    const {lis, ulId, openId, onButtonClick} = props;
   
    return (
       
    lis.map ((elem, liId) => (
    <li liId={liId} key = {liId}>
        <button id = {ulId} onClick={onButtonClick} className={styles.headerLi}>
            {elem.header}
            <span id="arrow" className={styles.arrow}>&darr;</span>
        </button>
        { openId === liId && 
            <div id="hideDiv" className={styles.bodyLi} dangerouslySetInnerHTML={{__html: elem.body}} ></div>
          }
    </li>
))

)}

    export default FaqLi;