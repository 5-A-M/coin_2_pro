import React, { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const THead = (props) => {
  const array_ = [
    {
      name: "qc_key",
      orderBy: "asc",
      text: "Symbol",
      className: "shkudhaksa2",
    },
    {
      name: "price_usd",
      orderBy: "asc",
      text: "Price",
      className: "shkudhaksa3",
    },
    {
      name: "price24h",
      orderBy: "asc",
      text: "1D %",
      className: "shkudhaksa4",
    },
    {
      name: "support1h",
      orderBy: "asc",
      text: "Support",
      className: "shkudhaksa5",
    },
    {
      name: "resistance1h",
      orderBy: "asc",
      text: "Resistance",
      className: "shkudhaksa6",
    },
  ];
  return (
    <thead className="jfhkldjadklsjdklaskjldsaad" style={{ width: "100%" }}>
      <section
        className="dhjskjlaaksasjklaskl"
        style={{ height: 50, width: "100%", display: "flex" }}
      >
        {array_.map((item, key) => (
          <DetailTD setSort={props.setSort} key={key} {...item} />
        ))}
      </section>
    </thead>
  );
};

export default THead;


// 
// 

const DetailTD= (props)=> {
  const [type, setType]= useState(()=> true)
  const sort = (item) => {
    
  };
  return (
    <section
      // onClick={() => sort(item)}
      // key={key}
      className={props.className}
    >
      {props.text}{
        type=== true && <SortA setSort={props.setSort} setType={setType} {...props} />
      }
      {
        type=== false && <SortD  setSort={props.setSort} setType={setType} {...props} />
      }
      {
        type=== undefined && <SortR setSort={props.setSort} setType={setType} {...props} />
      } 
    </section>
  )
}

const SortA= (props)=> {
  const sort= ()=> {
    props.setSort(()=> ({name: props.name, orderBy: "desc"}))
  }
  return (
    <div onClick={()=> {props.setType(()=> false);sort()}} className="ajsdklsjaskasaras" style={{display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer"}}>
      <ExpandLessIcon></ExpandLessIcon>
    </div>
  )
}

const SortD= (props)=> {
  const sort= ()=> {
    props.setSort(()=> (undefined))
  }
  return (
    <div onClick={()=> {props.setType(()=> undefined);sort()}} className="ajsdklsjaskasaras" style={{display: "flex", justifyContent: 'center', alignItems: "center", cursor: "pointer"}}>
      <ExpandMoreIcon></ExpandMoreIcon>
    </div>
  )
}

const SortR= (props)=> {
  const sort= ()=> {
    props.setSort(()=> ({name: props.name, orderBy: "asc"}))
  }
  return (
    <div onClick={()=> {props.setType(()=> true);sort()}} style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", cursor: "pointer"}}>
      <ExpandLessIcon></ExpandLessIcon>
      <ExpandMoreIcon></ExpandMoreIcon>
    </div>
  )
}
