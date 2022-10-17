import React, { useRef, useState } from 'react';
import { ReactDOM } from 'react';

const Sign = () => {
    const racerName = useRef();
    const reacerVehical = useRef();
    const racerType = useRef();
    const userName = useRef();
    const passkey = useRef();
    let raceprofile = '';

    const [racerPro , setRacerPro ] = useState ([
        {
            name: '',
            vehical:'',
            racing: '',
            user: '',
            pass: ''
        }
    ]);
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setRacerPro( racerPro => [{
            name: racerName.current.value,
            vehical: reacerVehical.current.value,
            racing: racerType.current.value,
            user: userName.current.value,
            pass: passkey.current.value
         }]);
         raceprofile = localStorage.setItem(1, JSON.stringify(racerPro));
         JSON.parse(raceprofile);
    console.log(racerPro.name);
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
            <li>{}</li>
            <li>{racerPro.vehical}</li>
            <li>{racerPro.racing}</li>
            
            
        </ul>
        
       </div>
    </div>
    )
};


export default Sign;