import React from 'react'
import { useMemo } from 'react'

const MenuFrist = (props) => {
  const arraySelect = useMemo(()=> [{value: 1, }, {value: 2, }, {value: 3, }, {value: 4, }], [])
  return (
    <div className="fjkljaklasjks" style={{width: "35vw", height: "60px", display: "flex", justifyContent: 'center',alignItems: 'center', borderTop: "1px solid #e7e7e7"}}>
      {
        arraySelect.map((item ,key)=> <ComponentMenu selectValue={props.selectValue} select={parseInt(key) + 1} setSelectValue={props.setSelectValue} key={key} {...item}></ComponentMenu>)
      }
    </div>
  )
} 

const ComponentMenu= (props)=> {
  return (
    <div onClick={()=> props.setSelectValue(()=> props.select)} className="djaklsjaklsjskdas" style={{flex: "1 1 0", height: "100%", display: "flex", justifyContent: 'center',alignItems: "center", cursor: "pointer", background: parseInt(props.selectValue) === parseInt(props.select) ? "#2e89ff" : "#fff", color: parseInt(props.selectValue) === parseInt(props.select) ? "#fff" : "#000"}}> 
      Button {props.value}
    </div>
  )
}

export default MenuFrist