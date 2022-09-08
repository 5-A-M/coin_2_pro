import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { SERVER_URL } from '../../config/config'
import "./style.sass"
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const Component5 = (props) => {
  const [data, setData]= useState(()=> {})
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: `${SERVER_URL}/api/dit/me/thang/han/xeng`,
        method: "get", 
        responseType: "json"
      })
      const result= await res.data
      setData(()=> result)
    })()
  }, [])
  useEffect(() => {
    const intervalId = setInterval(async () => {
      const res = await axios({
        url: `${SERVER_URL}/api/dit/me/thang/han/xeng`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="fjkldjsksadsasas" style={{width: "100%", height: "calc(40vh - 35px)", background: "#0a0618", paddingTop: 5}}>
      <Title />
      <div ref={ref} className="fjlkdhakujrhuajea" style={{display: "flex", justifyContent: "center", alignItems: "center", position: "relative", zIndex: 1000, gap: 16, height: "calc(100% - 20px)", backgroundColor: "#0a0618"}}>
        <ComponentComponent data={data} inView={inView} />
        <ComponentComponent2 data={data} inView={inView} />
      </div>
    </div>
  )
}

const ComponentComponent= (props)=> {
  const array_logo= [{src: "https://cdn.coinglasscdn.com/static/exchanges/157.png", type: "img"}, {src: "https://cdn.coinglasscdn.com/static/exchanges/bitfinex.jpg", type: "img"}, {src: "https://cdn.coinglasscdn.com/static/exchanges/270.png", type: "img"}, {src: "Total", type: "txt"}]
  return (
    <div className="djkdajksajsafdsd" style={{flex: "1 1 0", height: "100%"}}>
      <SymbolName symbolName={"BTC"} logo={"https://s2.coinmarketcap.com/static/img/coins/200x200/1.png"} />
      <table className="fdjhfhsejdkhass" id="bfjildjfgdslkjljkdf" style={{width: "100%", border: "1px solid #2e89ff", height: "calc(100% - 36px)"}}>
        <tr className="shjkdahsjdhsjdassa" style={{display: "flex", justifyContent: "space-between" , alignItems: "center", height: 30}}>
          <td style={{width: 50}}></td>
          <td style={{flex: "1 1 0", display: "flex", justifyContent: "center", alignItems: "center", borderLeft: "1px solid #2e89ff", borderRight: "1px solid #2e89ff", fontWeight: 600, height: "100%"}}>Long</td>
          <td style={{flex: "1 1 0", justifyContent: "center", alignItems: "center", display: "flex", fontWeight: 600, height: "100%"}}>Short</td>
        </tr>
        {
          props?.data?.long_percent?.slice(0, 4)?.map((item, key)=> <LongorShortRatio inView={props.inView} exchangeLogo={array_logo[parseInt(key)].src} type={array_logo[parseInt(key)].type} key={key} percentLong={item} volumeLong={props?.data?.long_volume?.[parseInt(key)]} percentShort={props?.data?.short_percent?.[parseInt(key)]} volumeShort={props?.data?.short_volume?.[parseInt(key)]} />)
        }
      </table>
      
    </div>
  )
}

const ComponentComponent2= (props)=> {
  const array_logo= [{src: "https://cdn.coinglasscdn.com/static/exchanges/157.png", type: "img"}, {src: "https://cdn.coinglasscdn.com/static/exchanges/bitfinex.jpg", type: "img"}, {src: "https://cdn.coinglasscdn.com/static/exchanges/270.png", type: "img"}, {src: "Total", type: "txt"}]
  return (
    <div className="djkdajksajsafdsd" style={{flex: "1 1 0", height: "100%"}}>
      <SymbolName symbolName={"ETH"} logo={"https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png"} />
      <table className="fdjhfhsejdkhass" id="bfjildjfgdslkjljkdf" style={{width: "100%", border: "1px solid #2e89ff", height: "calc(100% - 36px)"}}>
        <tr className="shjkdahsjdhsjdassa fdjdsdjklsdjksldkjs" style={{display: "flex", justifyContent: "space-between" , alignItems: "center", height: 30}}>
          <td style={{width: 50}}></td>
          <td style={{flex: "1 1 0", display: "flex", justifyContent: "center", alignItems: "center", borderLeft: "1px solid #2e89ff", borderRight: "1px solid #2e89ff", fontWeight: 600, height: "100%"}}>Long</td>
          <td style={{flex: "1 1 0", justifyContent: "center", alignItems: "center", display: "flex", fontWeight: 600, height: "100%"}}>Short</td>
        </tr>
        {
          props?.data?.long_percent?.slice(4, 8)?.map((item, key)=> <LongorShortRatio inView={props.inView} exchangeLogo={array_logo[parseInt(key)].src} type={array_logo[parseInt(key)].type} key={key} percentLong={item} volumeLong={props?.data?.long_volume?.[parseInt(key) + 4]} percentShort={props?.data?.short_percent?.[parseInt(key) + 4]} volumeShort={props?.data?.short_volume?.[parseInt(key) + 4]} />)
        }
      </table>
    </div>
  )
}

const SymbolName= (props)=> {
  return (
    <div className="djsdjaskassaa" style={{textAlign: "center", height: 28, display: "flex", alignItems: "center", margin: "4px 0"}}>
      <div className="fjdfsnljdkjsdklassa" id='szjlkdjskdlajsk' style={{width:24, height:24, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src={props.logo} alt="open" style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%"}} />
      </div>
      <div className="shdjhdjdhfsgdlkj" id='dzjfjldsjdsdasd' style={{marginLeft: 8, textTransform: "uppercase", fontWeight: 600, color: "#fff", fontSize: 20}}>{props.symbolName}</div>
    </div>
  )
}

const LongorShortRatio= (props)=> {
  return (
    <tr className="shjkdahsjdhsjdassa fdjdsdjklsdjksldkjs" style={{display: "flex", justifyContent: "space-between" , alignItems: "center", height: "calc((100% - 30px) / 4)"}}>
      <td className="kdasksjaksjaksasassa" style={{width: 50, display: "flex", justifyContent: "center" ,alignItems: "center"}}>
        {props.type=== "img" && <img alt={"open"} src={props.exchangeLogo} style={{width: 24, height: 24, objectFit: 'contain'}} />}
        {props.type=== "txt" && <p className="dsjkajksasasas" id="dsjkdjaksaasas" style={{fontSize: 18, fontWeight: 600}}>{props.exchangeLogo}</p>}
      </td>
      <td className='hjajajasjassjaasjasj' style={{flex: "1 1 0", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", gap: 5, borderLeft: "1px solid #2e89ff", borderRight: "1px solid #2e89ff"}}>
        <span className="fdjdshdkldjhaklsjaks" style={{color: "green", fontWeight: 600}}>{props.inView=== true ? <CountUp end={parseInt(props.volumeLong.replaceAll(",", "").replaceAll("$", ""))} duration={2} separator={","} prefix={"$ "} /> : "_"}</span>
        <span className="fhjdhajshasjashkariw" style={{fontSize: 14, fontWeight: 600}}>( {props.percentLong} )</span>
      </td>
      <td className='shdsjajkrealkdakawas' style={{flex: "1 1 0", display: "flex", justifyContent: 'center', alignItems: "center", flexDirection: "column", gap: 5}}>
        <span className="fhjdhasjhsjahsjawaw" style={{color: "red", fontWeight: 600}}>{props.inView=== true ? <CountUp end={parseInt(props.volumeShort.replaceAll(",", "").replaceAll("$", ""))} duration={2} separator={","} prefix={"$ "} /> : "_"}</span>
        <span className="fhjdshjaiwarwetarea" style={{fontSize: 14, fontWeight: 600}}>({props.percentShort})</span>
      </td>
    </tr>
  )
}

// const Percent= (props)=> {
//   return (
//     <div className={props.className}>
//       {props.percent}
//     </div>
//   )
// }

// const Volume= (props)=> {
//   return (
//     <div className={props.className}>
//       {props.volume}
//     </div>
//   )
// }

export default Component5

const Title= (props)=> {
  return (
    <div className="sjklfjskrlfjsda" style={{fontWeight: 600, fontSize: 18, height: 20, color: "#fff"}}>Real-time Long and Short Amount Ratio</div>
  )
}