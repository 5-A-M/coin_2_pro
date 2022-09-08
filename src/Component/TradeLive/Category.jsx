import React from 'react'
import { memo } from 'react'

const Category = (props) => {
  return (
    <div className="categoiodjkals">
        {props.text} {props.status}
    </div>
  )
}

export default memo(Category)