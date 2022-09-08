import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const NavigatePage = (props) => {
  return (
    <div className="fjkijeijaksjwieaqji" style={{display: "flex", alignItems: "center", gap: 10, marginLeft: 16}}>
        <button disabled={parseInt(props.currentPage) <= 0 ? true : false } onClick={()=> props.setCurrentPage(prev=> parseInt(prev) - 1)} className='siofhjokldsakssa' style={{width: 42, height: 42, borderRadius: 4, border: "1px solid #e7e7e7", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
            <IoIosArrowBack></IoIosArrowBack>
        </button>
        <button disabled={parseInt(props.currentPage) >= parseInt(props.totalPage) - 1 ? true : false } onClick={()=> props.setCurrentPage(prev=> parseInt(prev) + 1)} className='siofhjokldsakssa' style={{width: 42, height: 42, borderRadius: 4, border: "1px solid #e7e7e7", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
            <IoIosArrowForward></IoIosArrowForward>
        </button>
    </div>
  )
}

export default NavigatePage