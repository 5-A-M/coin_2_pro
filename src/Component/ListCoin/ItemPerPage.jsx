import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useMemo } from 'react'
import { MdArrowDropDown } from "react-icons/md"

const ItemPerPage = (props) => {
  const [defaultItemPerPage, setDefaultItemPerPage]= useState(()=> 25)
  const [open, setOpen]= useState(()=> false)
  const arrayItemPerPage= useMemo(()=> [25, 50, 100], [])
  const ref= useRef()
  useEffect(()=> {
    document.addEventListener("mousedown", clickoutside)
    return ()=> document.removeEventListener("mousedown",clickoutside)
  }, [])
  const clickoutside= (e)=> {
    if(ref?.current && !ref?.current?.contains(e.target)) {
      setOpen(()=> false)
    }
  }
  return (
    <div className="fjpdjsdieajweiaw" style={{padding: "10px", border: "1px solid #e7e7e7", cursor: "pointer", position: "relative"}}>
      <div className="dsjhkdahjkdslasas" onClick={()=> setOpen(prev=> !prev)}>Rows {defaultItemPerPage} <MdArrowDropDown></MdArrowDropDown></div>
      <div ref={ref} className='difjkpdejakpsw' style={{position: "absolute", width: "100%", background: "#f2f0f5", left: 0, top: "100%", border: "1px solid #e7e7e7"}}>
        {
          open===true && arrayItemPerPage?.map((item, key)=> <div onClick={()=> {setDefaultItemPerPage(()=> item);setOpen(()=> false);props.setItemPerPage(()=> item);props.setCurrentPage(()=> 0)}} className='dfikoluediosjddsd' style={{padding: 10, cursor: "pointer"}} key={key}>Rows {item}</div>)
        }
      </div>
    </div>
  )
}

export default ItemPerPage