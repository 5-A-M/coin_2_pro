import React from 'react'
import TBody from './TBody'
import THead from './THead'

const TableLiquidation = (props) => {
  const array_thead= ["Exchange", "Symbol", "Amount", "Position", "Time"]
  return (
    <table className="fhdjkehaukshajklwhasw" style={{width: "100%"}}>
      <THead array_thead={array_thead} {...props} />
      <TBody {...props} />
    </table>
  )
}

export default TableLiquidation