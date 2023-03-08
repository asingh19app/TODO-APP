import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import '../pages/styles/Index.css'

export default function Index() {
    const [eventDatabase, setDatabase] =useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/TODO/v1/form').then(res => {
      console.log(res.data)
      setDatabase(res.data)
    })
  }, [])

  return (<>
    <div>Index</div>
    <div className='block'>
    {eventDatabase.map(e1 =>{
        return(
            <div className='eventDate'>
                <ul key={e1.id}>
                    ID: {e1._id}
                    <br />
                    Title: {e1.title}
                    <br/>
                    Start Time: {e1.startTime}
                    <br/>
                    End Time :{e1.endTime}
                    <br/>
                    Category :{e1.category}
                    <br/>
                    Notes: {e1.notes}
                    <br/>
                </ul>
            </div>
        )
    })}
    </div>
    </>
  )
}
