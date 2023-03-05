import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

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
    {eventDatabase.map(e1 =>{
        return(
            <li key={e1.id}>
                {e1.title}, {e1.startTime}, {e1.endTime}, {e1.category}, {e1.notes}
            </li>
        )
    })}
    <ul>

    </ul>
    </>
  )
}
