import * as React from 'react';
import styles from './forms.module.css'
import {SignupForm} from "../../components/signupForm/signupForm";
import {EditUserForm} from "../../components/editUserForm/editUserForm";

export const Forms = () => {
    return <div className={styles.container}>
        <SignupForm/>
        <EditUserForm />
    </div>
}