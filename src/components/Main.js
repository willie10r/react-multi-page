import React from 'react';
import { ReactDOM } from 'react';

const Main = () => {
    return (
        <div>
            <h2>main page</h2>
            <div className='main-grid'>
                <section>
                    <ul id='racer-profile' className='grid'>
                        <li>racer 1</li>
                        <li>racer 2</li>
                    </ul>
                </section>
                <section>
                    <ul id='mod-list' className='grid'>
                        <li>mod part 1</li>
                        <li>mod part 2</li>
                        <li>mod part 3</li>
                    </ul>
                </section>
                <section>
                    <ul id='track-list' className='grid'>
                        <li>track:cota</li>
                        <li>track:msrh</li>
                    </ul>
                </section>
                <section>
                    <ul id='best-time' className='grid'>
                        <li>time 1</li>
                        <li>time 2</li>
                    </ul>
                </section>
            </div>
        </div>
    )
};
  
export default Main;