import React from 'react';

export default function Details({name,age,city}){    // destructuring in fly 

    return(
        <div className='p-3 border border-l w-72 bg-gray-300 rounded-xl m-3 outline outline-offset-2 outline-gray-60'>

            <h3 className='font-semibold'>Name : {name}</h3>
            <h3>Age : {age}</h3>
            <h3>City : {city}</h3>


        </div>
    )
}
