import React, { useEffect, useState } from 'react'
import './Progressbar.css'

function ProgressBar({value=0}) {
    const[percent, setPercent] = useState(value)
    useEffect(()=>{
        if(percent < 100){
            setTimeout(()=>setPercent(newval=>newval+1), 200)
        }
    },[percent])
  return (
  <>
    <h1 style={{textAlign:'center'}}>ProgressBar</h1>
    <div className="progressbar">
        <div className="progressbarfill" style={{width:`${percent}%`}}>{percent}%</div>
    </div>
  </>

  )
}

export default ProgressBar