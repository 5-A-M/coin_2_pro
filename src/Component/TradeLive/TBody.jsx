import React from 'react'
import TR from './TR'

const TBody = (props) => {
  return (
    <tbody className="fjskdhasjhasasa">
        {
            props?.data?.map((item, key)=> <TR
            className1="q34o9i3u9owiowwweq"
            key={key}
            {...item}
        />)
        }
        {/* <TR
            className1="q34o9i3u9owiowwweq"
            key={key}
            {...item}
        /> */}
    </tbody>
  )
}

export default TBody