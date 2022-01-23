import React,{useState} from 'react';
import './App.css';

const Bulb = ()=>{
    const[on,setOn] = useState(true);
return(
    <>
    <div className= {on ? 'bulb-on':'bulb-off'}> </div>
    <div>
        <button onClick={()=> setOn(!on)}> {on? 'ON':'OFF'} </button>
    </div>
    </>
);
}
export default Bulb;