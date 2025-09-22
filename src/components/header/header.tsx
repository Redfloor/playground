import * as React from 'react';
import { useLocation, Link } from 'react-router-dom'
import styles from './header.module.css'

interface ActiveLinkProps {
    to: string;
    children: string | JSX.Element | JSX.Element[];
}

export const Header = () => {
    const ActiveLink = ({to, children}: ActiveLinkProps) => {
        return (
            <Link to={to}>
                <div
                    className={location.pathname === to ? styles.active : styles.inactive}
                >
                    {children}
                </div>
            </Link>
        )
    }

    const location = useLocation();
    return (
        <header>
            <ActiveLink to={'/'} >
                Home
            </ActiveLink>
            <ActiveLink to={'/dash'} >
                Dash (R)
            </ActiveLink>
            <ActiveLink to={'/random'} >
                Random HTML
            </ActiveLink>
            <ActiveLink to={'/toys'} >
                Toy Box
            </ActiveLink>
            {/*<ActiveLink to={'/controls'} >*/}
            {/*    Control Room*/}
            {/*</ActiveLink>*/}
            <ActiveLink to={'/flap'} >
                Flap
            </ActiveLink>
            <ActiveLink to={'/speech-engine'} >Speech Engine</ActiveLink>
        </header>
    )
}
