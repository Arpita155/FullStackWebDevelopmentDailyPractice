import React from 'react';

export default function CardCreation({name,username,email,street,suite,city,zipcode,geo,lat,lng}){    // destructuring in fly 

    return(
        <div className='p-3 border border-l h-80 w-72 bg-gray-300 rounded-xl m-6 outline outline-offset-2 outline-gray-60 '>

            <h3 className='font-semibold'>Name : {name}</h3>
            <h3>username : {username}</h3>
            <h3>Email : {email}</h3>
            <h3>Street : {street}</h3>
            <h3>Suite : {suite}</h3>
            <h3>City : {city}</h3>
            <h3>Zipcode : {zipcode}</h3>
            <h3>Geo : {geo}</h3>
            <h3>Lat : {lat}</h3>
            <h3>Lang : {lng}</h3>


        </div>
    )
}

