import React from 'react';
import styles from '../../pages/Events/Events.module.sass';
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';

const AddEventForm = () => {
    return (
        <Formik
          initialValues={{ event: '', eventDate: '', warnFor: '' }}
          validationSchema={Yup.object({
            event: Yup.string()
              .max(55, 'Must be 55 characters or less')
              .required('Required'),
            eventDate: Yup.date()
              .min(new Date(), `Date must be after ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`)
              .required('Required'),
            warnFor: Yup.date()
                .min(new Date(), `Date must be after ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`)
                .max(Yup.ref('eventDate'), 'Date must be befor event date')
                .required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="event">Add event</label>
            <Field name="event" type="text" />
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
    
            <button type="submit">Add event</button>
          </Form>
        </Formik>
      );

};

export default AddEventForm;