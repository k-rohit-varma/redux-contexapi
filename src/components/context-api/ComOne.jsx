import React, { useContext } from 'react'
import { changeColor } from './Global'


const ComOne = () => {
    const {bgColor, setBgColor} = useContext(changeColor)
  return (
    <div>
        <h4>current color {bgColor} </h4>
       <button onClick={()=>{
        bgColor =="black" ? setBgColor("red") :
        setBgColor("black")
       }} > {bgColor} </button>
    </div>
  )
}

export default ComOne