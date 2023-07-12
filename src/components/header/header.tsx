import * as React from 'react';
import { useLocation, Link } from 'react-router-dom'
import styles from './header.module.css'

export const Header = () => {
    const location = useLocation();
    return (
        <header>
            <Link to="/">
                <div
                    className={location.pathname === '/' ? styles.active : styles.inactive}
                >
                    Home
                </div>
            </Link>
            <Link to="/dash">
                <div
                    className={location.pathname === '/dash' ? styles.active : styles.inactive}
                >
                    Dash
                </div>
            </Link>
            <Link to="/forms">
                <div
                    className={location.pathname === '/forms' ? styles.active : styles.inactive}
                >
                    Forms
                </div>
            </Link>
        </header>
    )
}