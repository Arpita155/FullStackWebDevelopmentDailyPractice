import React from 'react';

export default function Details(props){

    // const person = {
    //     // name : "Arpita sahoo",
    //     // age : 21,
    //     // address : 'kolkata'

    //     name : props.name,
    //     age : props.age,
    //     address : props.address
    // }

    return(
        <div className='p-3 border border-l w-72 bg-gray-300 rounded-xl m-3 outline outline-offset-2 outline-gray-60'>
            {/* <h3 className='font-semibold'>Name : {person.name}</h3>
            <h3>Age : {person.age}</h3>
            <h3>Address : {person.address}</h3> */}

            <h3 className='font-semibold'>Name : {props.name}</h3>
            <h3>Age : {props.age}</h3>
            <h3>Address : {props.address}</h3>
        </div>
    )
}
