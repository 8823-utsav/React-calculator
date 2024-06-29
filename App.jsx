import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { startTransition, useState } from 'react';
import Display from './Display';
import Button from './Button';

function App() {
 const buttonnames = ["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0",".",];

 let [calval , setcalval]=useState("");
 const onbuttonclick =(buttontext)=>  {

  if(buttontext === "c")
    {
      setcalval(" ");
    }
    else if( buttontext === "=")
      {
        const result = eval(calval);
        setcalval(result);
      }
      else{
        const newdisplayval=calval+buttontext;
        setcalval(newdisplayval);
      }
}
 
 
 return (
     
     <>
        <div className={styles.calculator} >
         <Display display={calval}></Display>
         <Button onbuttonclick={onbuttonclick}></Button> 

</div> 
 </>
    );
  };
export default App;
