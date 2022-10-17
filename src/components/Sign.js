import React, { useRef } from 'react';
import { ReactDOM } from 'react';

const Sign = () => {
    const racerName = useRef();
    const reacerVehical = useRef();
    const racerType = useRef();
    const userName = useRef();
    const passkey = useRef();
    const racerPro = {}
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const racerPro = {
            name: racerName.current.value,
            vehical: reacerVehical.current.value,
            racing: racerType.current.value,
            user: userName.current.value,
            pass: passkey.current.value

            
         
     
         }
       localStorage.setItem(1,racerPro);
    console.log(localStorage.getItem(1));
    }
    return (
    <div>
        <h2 className='title'>sign here</h2>
        <form onSubmit={(e) => handleSubmit(e) }>
        <label>racer's name</label>
        <input
            className='racer-input'
            type = 'text'
            ref={racerName}
            placeholder='racers name'
        />
        <label>what type of vehical</label>
        <input
            className='racer-input'
            type = 'text'
            ref={reacerVehical}
            placeholder='vehical'
        />
        <label>what type of racing</label>
        <input
            className='racer-input'
            type = 'text'
            ref={racerType}
            placeholder='type of racing'
        />
        <label>user name</label>
        <input
            className='racer-input'
            type = 'text'
            ref={userName}
            placeholder='user name'
        />
        <label>password</label>
        <input
            className='racer-input'
            type = 'text'
            ref={passkey}
            placeholder='password'
        />
        <input
            type = 'submit'
            value = 'submit'
        />
       </form>
       <div>
        <ul>
            <li>{JSON.stringify(localStorage.getItem(1))}</li>
            <li>{racerPro.vehical}</li>
            <li>{racerPro.racing}</li>
            
            
        </ul>
        
       </div>
    </div>
    )
};


export default Sign;