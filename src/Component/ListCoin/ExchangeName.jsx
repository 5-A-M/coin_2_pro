import React, { memo, useEffect, useRef, useState } from 'react'

const ExchangeName = (props) => {
  // eslint-disable-next-line
  const [arrayExchange, setArrayExtrange]= useState(()=> [{exchangeName: "binance", logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png"}, {exchangeName: "bybit", logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/521.png"}, {exchangeName: "upbit", logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/351.png"},, {exchangeName: "bithumb", logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/200.png"}])
  const [defaultExchange, setDefaultExchange]= useState(()=> ({exchangeName: "binance", logo: "https://s2.coinmarketcap.com/static/img/exchanges/64x64/270.png"}))
  const [open, setOpen]= useState(()=> false)
  const ref= useRef()
  useEffect(()=> {
    document.addEventListener("mousedown", clickoutside)
    return ()=> document.removeEventListener("mousedown",clickoutside)
  }, [])
  const clickoutside= (e)=> {
    if(ref?.current && !ref?.current?.contains(e.target)) {
      setOpen(()=> false)
    }
  }
  return (
    <div className='fhjsiodjaklosjsfd' style={{width: "100%", height: 50, borderBottom: "1px solid #000", position: "relative"}}>
      <div onClick={()=> setOpen(prev=> !prev)} className="jkpjdsksdolasdeaas" style={{height: "100%", display: "flex", alignItems: 'center', cursor: "pointer"}}><img src={defaultExchange.logo} alt="open" style={{width: 26, height: 26, objectFit: "cover", borderRadius: "50%", marginRight: 8}} /><span className="fjhkjdhsukshaoiusas" style={{textTransform: "capitalize"}}>{defaultExchange.exchangeName}</span></div>
      {
        open=== true &&
        <div ref={ref} className='fdjshedohjgdfosiktjeirto' style={{position: "absolute", top: "100%", left: 0, zIndex: 2, background: "#f2f0f5", width: "100%", display :'flex', flexDirection: 'column', userSelect: "none", borderRadius: 10}}>
          {
            arrayExchange?.map((item, key)=> <div key={key} onClick={()=> {setDefaultExchange(()=> ({exchangeName: item.exchangeName, logo: item.logo}));setOpen(()=> false);props?.setExchangeName(()=> item.exchangeName.toLowerCase())}} className="jkpjdsksdolasdeaas dfsfghfgghdfhgngjh" style={{height: "100%", display: "flex", alignItems: 'center', cursor: "pointer"}}><img src={item.logo} alt="open" style={{width: 26, height: 26, objectFit: "cover", borderRadius: "50%", marginRight: 8}} /><span style={{textTransform: "capitalize"}}>{item.exchangeName}</span></div>)
          }
        </div>
      }
    </div>
  )
}

export default memo(ExchangeName)