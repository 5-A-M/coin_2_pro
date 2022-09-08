import React from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"
import * as Scroll from "react-scroll"

const ScrollToBottom = (props) => {
  const scroll= Scroll.animateScroll
  return (
    <div onClick={()=> scroll.scrollToTop({
        containerId: "agjoirfjaisejfsieds",
      })} style={{display: "flex", justifyContent: 'center',alignItems: "center", width: 40, height: 40, background: "#f2f0f5", borderRadius: "50%", position: "absolute", left: 0, margin: 16, cursor: "pointer", zIndex: 3, bottom: 60}}>
        <AiOutlineArrowUp style={{margin: 0}}></AiOutlineArrowUp>
    </div>
  )
}

export default ScrollToBottom