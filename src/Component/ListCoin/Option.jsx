import React from 'react'
import ItemPerPage from './ItemPerPage'
import NavigatePage from './NavigatePage'

const Option = (props) => {
  return (
    <div className='dikfjkisdfjdsdakos' style={{width: "100%", height: 64, display: "flex", alignItems: 'center', borderBottom: "1px solid #000"}}>
      <ItemPerPage setCurrentPage={props.setCurrentPage} setItemPerPage={props.setItemPerPage} totalPage={props.totalPage}></ItemPerPage>
      <NavigatePage setCurrentPage={props.setCurrentPage} totalPage={props.totalPage} currentPage={props.currentPage} itemPerPage={props.itemPerPage}></NavigatePage>
    </div>
  )
}

export default Option