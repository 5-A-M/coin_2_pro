import React from 'react'
import { memo } from 'react'
import NumberFormat from 'react-number-format'
import usePrevious from '../CustomHook/usePrevious'

const DetailLineCoin = (props) => {
  const previousValue= usePrevious(props?.deviant)
  return (
    <tr className="djkssjaskjsadsd" style={{position: "relative"}}>
      <td style={{fontSize: 14, textAlign: "right", color: parseFloat(previousValue) > parseFloat(props.deviant) ? "#ff5b5b" : "#10c469"}}><NumberFormat displayType={'text'} renderText={(value, props)=> value} value={props.price} thousandSeparator={","} /></td>
      <td style={{fontSize: 14, textAlign: "right", color: parseFloat(previousValue) > parseFloat(props.deviant) ? "#ff5b5b" : "#10c469" }}><NumberFormat displayType={'text'} renderText={(value, props)=> value} value={props.deviant} thousandSeparator={","} /></td>
      {
        props.is_add_time=== true && <td style={{fontSize: 14, textAlign: "right", color: parseFloat(previousValue) > parseFloat(props.deviant) ? "#ff5b5b" : "#10c469"}}>{props?.time}</td>
      }
      {
        props.is_add_total=== true && <td style={{fontSize: 14, textAlign: "right", color: parseFloat(previousValue) > parseFloat(props.deviant) ? "#ff5b5b" : "#10c469"}}>{props?.total?.toFixed(3)}</td>
      }
      <td style={{fontSize: 14, textAlign: "right", color: parseFloat(previousValue) > parseFloat(props.deviant) ? "#ff5b5b" : "#10c469"}}>
        {
          <img src={props?.dataExchange?.[Math.floor(Math.random() * props?.dataExchange?.length)]?.exchangeLogo} alt="" style={{width: 12, height: 12, objectFit: 'cover'}} />
        }
      </td>
    </tr>
  )
}

export default memo(DetailLineCoin)