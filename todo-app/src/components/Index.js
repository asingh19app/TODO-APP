import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../pages/styles/Index.css'

export default function Index() {
    const [eventDatabase, setDatabase] =useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/TODO/v1/myforms').then(res => {
      console.log(res.data)
      setDatabase(res.data)
    })
  }, [])

  return (<>
    <div>Index</div>
    <div className='list'>
    {eventDatabase.map(e1 =>{
        return(
            <div className='eventDate'>
                <li key={e1.id}>
                    <li>Title: {e1.title}</li>
                    <li>Start Time: {e1.startTime}</li>
                    <li>End Time :{e1.endTime}</li>
                    <li>Category :{e1.category}</li>
                    <li>Notes: {e1.notes}</li>
                </li>
            </div>
        )
    })}
    </div>
    </>
  )
}
