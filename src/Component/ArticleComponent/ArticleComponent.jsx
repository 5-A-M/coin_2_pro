import axios from 'axios'
import _ from 'lodash'
import moment from 'moment'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { SERVER_URL } from '../config/config'
import Spinner from '../Entities/Spinner'
import Loading from '../Loading/Loading'

const ArticleComponent = (props) => {
  const [data, setData]= useState(()=> [])
  useEffect(()=> {
    (async ()=> {
        const res= await axios({
            url: `${SERVER_URL}/api/v1/get/article`,
            method: "get",
            responseType: "json"
        })
        const result= await res.data
        setData(()=> result)
    })()
  }, [])
  return (
    <div className="dajkwsjaiojwqaaasa" style={{width: "100%", height: "calc(100vh - 60px)", overflow: "auto"}}>
        {
            data?.length <=0 && <div style={{width: "100%", height: "100%", display: "flex", justifyContent: 'center', alignItems: "center"}}>
                <Loading />
            </div>
        }
        {
            data?.length > 0 && data?.filter(item=> item).map((item, key)=> <ComponentDetailArticle index={key} key={item?.id + item?.source_id} {...item} />)
        }
    </div>
  )
}

export default ArticleComponent
const ComponentDetailArticle= (props)=> {
    return (
        <div className="dsjiajisjqoiwiosfjoiksda" style={{width: "100%",}}>
            <C1 {...props} />
            <C2 {...props} />
        </div>
    )
}

const C1= (props)=> {
    return (
        <div className="dsjhiopdusiodfpoipojsd" style={{width: "100%", height: 56, padding: 10, border: "1px solid #e7e7e7", display: "flex", alignItems: "center"}}>
            <div style={{fontSize: 14, height: "100%", width: 90, marginRight: 10}}>{moment(parseInt(props.created_at) * 1000).fromNow()}</div>
            <div onClick={()=> window.location.href= props.link} style={{height: "100%", flex: "1 1 0", fontSize: 14, whiteSpace: "nowrap", overflow: 'hidden', textOverflow: "ellipsis", cursor: "pointer"}}>
                {_.startCase(_.toLower(props?.title))}
            </div>
        </div>
    )
}


const C2= (props)=> {
    return (
        <div className="fhjdkhsuidhuidhuaj" style={{width: "100%", height: 100, overflow: "hidden", textOverflow: "ellipsis", padding: 10}}>
            {props.content}
        </div>
    )
}