import React from 'react';
import styles from '../../pages/Events/Events.module.sass';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {formatDate, formValuesToLocalStorage} from './functions';

const AddEventForm = (props) => {
  
  const {localStorageValue, updEventListFn} = props;

    return (
        <Formik
          initialValues={{ event: '', eventDate: '', warnFor: '' }}
          validationSchema={Yup.object({
            event: Yup.string()
              .max(50, 'Must be 50 characters or less')
              .required('Required'),
            eventDate: Yup.date()
              .min(new Date(), 
                ({min}) => `Date must be after ${formatDate(min)}`)
              .required('Required'),
            warnFor: Yup.date()
              .min(new Date(), 
                ({min}) => `Date must be after ${formatDate(min)}`)
              .max(Yup.ref('eventDate'), 
                  ({max}) => 
                  `Date must be before ${formatDate(max)}`)
              .required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            formValuesToLocalStorage(values, localStorageValue);
            setSubmitting(false);
            resetForm();
            alert('Event added!');
            document.querySelector("#form").style.display = "none";
            updEventListFn((prev) => prev + 1);
            }
          }
          onReset={(_, {}) => {
            document.querySelector("#form").style.display = "none";
          }}
        >
          <Form id="form" className = {styles.formStyle} >
            <label htmlFor="event">Add event</label>
            <Field name="event" type="text" placeholder="Enter event (50 characters)" />
            <ErrorMessage name="event" />
            <br/>
    
            <label htmlFor="eventDate">Add event date</label>
            <Field name="eventDate" type="datetime-local" />
            <ErrorMessage name="eventDate" />
            <br/>

            <label htmlFor="warnFor">Warn for</label>
            <Field name="warnFor" type="datetime-local" />
            <ErrorMessage name="warnFor" />
            <br/>
          
            <div className={styles.formBtn}>
              <button type="submit">Add event</button>
              <button type="reset">Cancel</button>
            </div>
          </Form>
        </Formik>
      );

};

export default AddEventForm;