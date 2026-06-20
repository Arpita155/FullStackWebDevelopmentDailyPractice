import React from 'react';
import './Navbar.css';

export default function Navbar(){
    return(
        <div>

            <nav className="navbar">
                <div className='maindiv'>
                    <h3>GFG</h3>
                    <div className='div1'>
                        <a href="">Home</a>
                        <a href=''>About</a>
                        <a href=''>Services</a>
                        <a href=''>Contact</a>
                    </div>
                    <div className='div2'>
                        <button className='navbt1'>Login</button>
                        <button className='navbtn2'>Go to Dashboard &rarr;</button>
                    </div>
                </div>
                
            </nav>




            {/* <nav className='navbar'>
                <h2 className='text-3xl ml-10 text-purple-500'>Sticky</h2>
                <button className='h-10 mr-10 bg-purple-300 px-5 py-2 rounded-4xl  tracking-
                text-sm outline-1 outline-offset-2'>Dashboard &rarr;</button>
            </nav> */}
        </div>
    )
}
