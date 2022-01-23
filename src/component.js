import React,{useState} from 'react';
import './App.css';

const Bulb = ()=>{
    const[off,setOff] = useState(true);
return(
    <>
    <div className= {off ? 'bulb-off':'bulb-on'}> </div>
    <div>
        <button onClick={()=> setOff(!off)}> {off? 'OFF':'ON'} </button>
    </div>
    </>
);
}
export default Bulb;