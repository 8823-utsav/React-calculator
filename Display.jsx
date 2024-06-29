         import React from 'react'      
          import styles from './App.module.css';

           export default function Display({display}) {
            return (
           <div>
        <input className={styles.display} type="text"  value={display} readOnly/>
    </div>
  )
} 