import React, { memo } from 'react'

const SizeFilter = (props) => {
  return (
    <div className="djasjaosjiowujqaw">
        <span>Size filter: </span>&nbsp;<input value={props?.sizeFilter} onChange={(e)=> typeof parseFloat(e.target.value)=== "number" && props?.setSizeFilter(e.target.value)} type="text" className="sajoiwaiwuwqwqw" style={{height: 22, width: 50, textAlign: "center"}} />
    </div>
  )
}

export default memo(SizeFilter)