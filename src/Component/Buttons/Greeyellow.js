import React from 'react'
import { Link } from 'react-router-dom'


export default function Greeyellow(props) {
  return (
    <>
    <div className="green-yellow"> 
    <Link to={props.Link}>{props.text}</Link>
    </div>
    </>
  )
}
