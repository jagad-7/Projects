import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'
import './Progressbar.css'

function LoadingBar() {
    const [progess, setProgress] = useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setProgress((val)=>val+1)
        },100)
    },[])
  return (
    <div className="container">
            <ProgressBar value={progess}/>
        <div className="row justify-content-md-center">
            <div className="col-md-6">

            </div>
        </div>
    </div>
  )
}

export default LoadingBar