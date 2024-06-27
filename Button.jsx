import React from 'react'    
import styles from './App.module.css';
export default function Button({onbuttonclick}) {
  const buttonnames = ["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0",".",];

  return (
    <div>
      <div className={styles.buttoncontainer}  >
           {buttonnames.map((buttonname)=>
    (
         <button className={styles.buttondisplay} onClick={()=>onbuttonclick(buttonname)}   >{buttonname}</button>
          
    ))}
     </div>
       
    </div>
  )
}