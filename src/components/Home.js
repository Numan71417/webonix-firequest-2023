import React from 'react'
import Trash from './Trash'
import Trashdetails from './Trashdetails'
// import Trash2 from './Trash2'
// import Trashdetails2 from './Trashdetails2'

export default function Home({user}) {
  return (
    <div>
      {/* <h4 className='center '>Hello </h4> */}
    {/* <p className="right white">Email logged in as : {user.email}</p> */}
      <Trash/>
      <Trashdetails/>

      {/* <Trash2/>
      <Trashdetails2/>  */}
    </div>
  )
}
