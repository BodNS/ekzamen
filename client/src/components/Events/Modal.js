import React from 'react';
import style from '../../pages/Events/Events.module.sass'

const Modal = (props) => {

    const  {nameEvent} = props;

    return (
        <div className={style.modal_window}>
                {nameEvent}
        </div>
    )

}
export default Modal;