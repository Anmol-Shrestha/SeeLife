import React from 'react'
import { Link } from 'react-router-dom'
export default function Yellotrans(props) {
  return (
    <>
    <div className="yellow-transparent"> 
    <Link to={props.Link}>{props.text}</Link>
    
    </div>
    
   
    
    </>
  )
}
