import React from 'react'

export default function UserDetails() {
  return (
    <div>
      <h5 className=''><a href={`mailto :${User.email}`}>Email : {User.email}</a></h5>
    </div>
  )
}
