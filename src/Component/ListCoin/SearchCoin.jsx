import React from 'react'


const SearchCoin = (props) => {
  return (
    <div className="sjkdjksajsajsas" style={{width: "50%", height: 50, borderBottom: "1px solid #000"}}>
      <input onChange={(e)=> props.setSearch(e.target.value)} type="text" className='jdkjkalskskakasjss' style={{width: "100%", height: "100%", padding: 10, outline: "none", border: "none", fontWeight: 600}} placeholder="Search any coin you want" />
    </div>
  )
}

export default SearchCoin