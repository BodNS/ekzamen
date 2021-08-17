import React, { useState, useEffect } from 'react';
import styles from '../../pages/HowItWorks/HowItWorks.module.sass';

const FaqLi = (props) =>{

    const [openId, setopenId] = useState(1);

    const {lis} = props;

    const onButtonClick = (liId) => {
       setopenId({openId: openId === liId ? openId : liId})
         
    }

    return (
       
    lis.map ((elem) => (
    <li key = {elem.id}>
        <button onClick={onButtonClick(elem.id)} className={styles.headerLi}>{elem.header}</button>
        { openId === elem.id && <div className={styles.bodyLi}>{elem.body}</div>}
    </li>
))

)}

    export default FaqLi;