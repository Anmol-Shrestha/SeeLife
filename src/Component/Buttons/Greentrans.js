import React from 'react'
import { Link } from 'react-router-dom'
export default function Greentrans(props) {
  return (
    <>
    <div className="green-transparent"> 
    <Link to={props.Link}>{props.text}</Link>
    </div>
    </>
  )
}
