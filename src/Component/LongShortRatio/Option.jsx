import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Option = (props) => {
  return (
    <div className="ajofjdgjsiejesds" style={{width: "100%", display: "flex", flexDirection: "row-reverse", alignItems: 'center', gap: 10}}>
        <ChooseTime listSymbol={props?.listSymbol} timeType={props?.timeType} setTimeType={props?.setTimeType}></ChooseTime>
        <ChooseCoin listSymbol={props?.listSymbol} symbol={props?.symbol} setSymBol={props?.setSymBol}></ChooseCoin>
    </div>
  )
}

const ChooseCoin= (props)=> {
    const myRef= useRef()
    const [open, setOpen]= useState(()=> false)
    useEffect(()=> {
        document.addEventListener("mousedown", clickOutSide)
        return ()=> document.removeEventListener("mousedown", clickOutSide)
    }, [])
    const clickOutSide= (e)=> {
        if(myRef?.current && !myRef?.current?.contains(e.target)) {
            setOpen(()=> false)
        }
    }
    return (
        <div onClick={()=> setOpen(prev=> !prev)} ref={myRef} className="fajeretoiajfsd" style={{width: 120, height: 32, position: "relative", borderRadius: 10, background: "#222531", alignItems: "center", display: "flex", fontSize: 14, padding: "0 11px", cursor: "pointer", userSelect: "none"}}>
            <div style={{fontWeight: 600, color: "#a1a7bb"}}>{props?.symbol}</div>
            <div style={{position: "absolute", right: 0, top: "50%", transform: "translate( 0, -50%)", marginTop: 4,}}>
                <KeyboardArrowDownIcon style={{color: "#fff"}}></KeyboardArrowDownIcon>
            </div>
            <div className="jgoirjdkdfsdsfdsds" style={{position: "absolute", zIndex: 10, top: "100%", marginTop: 8, height: open=== true ? 300 : 0, width: "100%", background: "inherit", left: 0, borderRadius: 10, overflow: 'auto', transition: "height 0.25s linear"}}>
                {
                    props?.listSymbol?.map((item, key)=> <Component2 setSymBol={props?.setSymBol} key={key} item={item}></Component2>)
                }
            </div>
        </div>
    )
}
 //


const ChooseTime= (props)=> {
    const array_time= [{time: 5, timeType: 3, isHour: false}, {time: 15, timeType: 10, isHour: false}, {time: 30, timeType: 11, isHour: false}, {time: 60, timeType: 2, isHour: true}, {time: 240, timeType: 1, isHour: true}, {time: 720, timeType: 4, isHour: true}, {time: 1440, timeType: 5, isHour: true}]
    const myRef= useRef()
    const [open, setOpen]= useState(()=> false)
    useEffect(()=> {
        document.addEventListener("mousedown", clickOutSide)
        return ()=> document.removeEventListener("mousedown", clickOutSide)
    }, [])
    const clickOutSide= (e)=> {
        if(myRef?.current && !myRef?.current?.contains(e.target)) {
            setOpen(()=> false)
        }
    }
    return (
        <div ref={myRef} onClick={()=> setOpen(prev=> !prev)} className="gkaowrjeisogjdfmkas" style={{width: 120, height: 32, position: "relative", borderRadius: 10, background: "#222531", alignItems: "center", display: "flex", fontSize: 14, padding: "0 11px", cursor: "pointer", userSelect: "none"}}>
            <div style={{fontWeight: 600, color: "#a1a7bb"}}>{props?.timeType?.time} {props?.timeType?.isHour=== true ? "hours" : "minutes"}</div>
            <div style={{position: "absolute", right: 0, top: "50%", transform: "translate( 0, -50%)", marginTop: 4}}>
                <KeyboardArrowDownIcon style={{color: "#fff"}}></KeyboardArrowDownIcon>
            </div>
            <div style={{position: "absolute",zIndex: 10, top: "100%", marginTop: 8, height: open=== true ? "auto" : 0, width: "100%", background: "inherit", left: 0, borderRadius: 10, overflow: 'hidden', transition: "height 0.25s linear"}}>
                {
                    array_time?.map((item, key)=> <Component setTimeType={props?.setTimeType} key={key} isHour={item.isHour} timeType={item.timeType} item={item.time >= 60 ? Math.floor(item.time / 60) : item.time} unit={item.time >= 60 ? "hours" : "minutes"}></Component>)
                }
            </div>
        </div>
    )
}

const Component= (props)=> {
    return (
        <div onClick={()=> props?.setTimeType(()=> ({time: props?.item, timeType: props?.timeType, isHour: props?.isHour}))} className='jsiofjdklksldsa' style={{fontWeight: 600, color: "#fff", cursor: "pointer", padding: "4px 11px"}}>
            {props?.item}&nbsp;{props?.unit}
        </div>
    )
}
//
const Component2= (props)=> {
    return (
        <div onClick={()=> props?.setSymBol(()=> props?.item)} className='jsiofjdklksldsa' style={{fontWeight: 600, color: "#fff", cursor: "pointer", padding: "4px 11px"}}>
            {props?.item}&nbsp;{props?.unit}
        </div>
    )
}

export default Option