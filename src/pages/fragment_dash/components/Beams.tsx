import React from 'react'
import styles from './Beams.module.css'

export const Beams = () => (
    <div className={styles.beambox}>
        <line className={styles.horz0}/>
        <line className={styles.horz1}/>
        <line className={styles.horz2}/>
        <line className={styles.horz3}/>
        <line className={styles.horz4}/>
        <line className={styles.vert0}/>
        <line className={styles.vert1}/>
        <line className={styles.vert2}/>
        <line className={styles.vert3}/>
        <line className={styles.vert4}/>
        <line className={styles.vert5}/>
        <h2>Red Floor</h2>
    </div>
);
