import React from 'react'
import { memo } from 'react'
import { AiOutlineArrowUp } from "react-icons/ai"

const MenuControl = (props) => {
  return (
    <thead className='jdfigojuisasasorejrioasd' style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <WrapperRest setSortField={props.setSortField} setSortDirection={props?.setSortDirection}></WrapperRest>
    </thead>
  )
}

const WrapperRest= (props)=> {
    return (
        <tr className="skaldjwkajewwawa" style={{width: "100%", display: "flex", alignItems: "center"}}>
            <CoinNameField setSortField={props.setSortField} setSortDirection={props?.setSortDirection}></CoinNameField>
            <PriceField></PriceField>
            <TwentyFourField></TwentyFourField>
            <MarketCapField setSortField={props.setSortField} setSortDirection={props?.setSortDirection}></MarketCapField>
            <VolumeField setSortField={props.setSortField} setSortDirection={props?.setSortDirection}></VolumeField>
        </tr>
    )
}

const CoinNameField= (props)=> {
    return (
        <th className="fjkljfssrlkdejsadkawsssdasasa">
            <span className="fjlkrdhssksasasldsas">Coin name</span>
            <AiOutlineArrowUp></AiOutlineArrowUp>
        </th>
    )
}

const PriceField= (props)=> {
    return (
        <th className="djzlfkijkldsajdssadssassa">
            <span className="fjlkrdhklasasasasdsas">Price</span>
        </th>
    )
}

const TwentyFourField= (props)=> {
    return (
        <th className="djzlfkijkldsajdssassasa">
            <span className="fjlkrdhklasasasasdsas">24h</span>
        </th>
    )
}

const MarketCapField= (props)=> {
    return (
        <th onClick={()=> {props.setSortField(()=> "market_cap");props.setSortDirection(prev=> !prev)}} className="djzlfkijkldsajdssa">
            <span className="fjlsaasassaassaassskrdhkldsas">Market Cap</span>
            <AiOutlineArrowUp></AiOutlineArrowUp>
        </th>
    )
}

const VolumeField= (props)=> {
    return (
        <th onClick={()=> {props.setSortField(()=> "volume");props.setSortDirection(prev=> !prev)}} className="djzlfkijkldsajdssa">
            <span className="fasjilduiksldsajlkrdhkldsas">Volume(24h)</span>
            <AiOutlineArrowUp></AiOutlineArrowUp>
        </th>
    )
}

export default memo(MenuControl)