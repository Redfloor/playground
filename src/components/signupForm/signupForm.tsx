import * as React from 'react';
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";
import styles from './signupForm.module.css'

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: Yup.string().email('Invalid email').required('Required'),
});

export const SignupForm = () => {
    return <div>
        <h1>Signup</h1>
    <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
            // same shape as initial values
            console.log(values);
        }}
    >
        {({ errors, touched }) => (
            <Form className={styles.form}>
                {/* Can extend these beautifully into custom components. Don't have time for this rn. */}
                <div>
                    <label>First Name</label>
                    <Field name="firstName" />
                    {errors.firstName && touched.firstName ? (
                        <div className={styles.error}>{errors.firstName}</div>
                    ) : null}
                </div>
                <div>
                    <label>Last Name</label>
                    <Field name="lastName" />
                    {errors.lastName && touched.lastName ? (
                        <div className={styles.error}>{errors.lastName}</div>
                    ) : null}
                </div>
                <div>
                    <label>Email</label>
                    <Field name="email" type="email" disabled placeholder='user@example.com'/>
                    {errors.email && touched.email ? <div className={styles.error}>{errors.email}</div> : null}
                </div>
                <div>
                    <label>Phone</label>
                    <Field name="phone" type="phone" />
                    {errors.phone && touched.phone ? <div className={styles.error}>{errors.phone}</div> : null}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </Form>
        )}
    </Formik>
</div>
}