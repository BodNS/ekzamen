import React from 'react';
import styles from '../../pages/HowItWorks/HowItWorks.module.sass';

const FaqLi = (props) =>{

    const {lis, h3, ulId, openId, onButtonClick} = props;
    
    return (
       <div className={styles.ul_wrapper}>   
            <h3>{h3}</h3>
            <div className={styles.li_container}>
                <ul>
                {lis.map ((elem, liId) => (
                    <li liId={liId} key = {liId}>
                        <button id = {ulId} onClick={onButtonClick} className={styles.headerLi}>
                            {elem.header}
                        <div className={styles[openId === liId ?  'rotate_arrow' : 'arrow']}>&darr;</div>
                        </button>
                        { openId === liId && 
                            <div className={styles.bodyLi} dangerouslySetInnerHTML={{__html: elem.body}} ></div>
                            }
                    </li>
                ))}
                </ul>
        </div>
    </div>
)}

    export default FaqLi;