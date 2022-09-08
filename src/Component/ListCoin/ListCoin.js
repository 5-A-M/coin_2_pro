import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import MainList from "./MainList";
import { useInView } from "react-intersection-observer";
import ScrollToBottom from "./ScrollToBottom";
import "./ListCoin.sass";
import { SERVER_URL } from "../config/config";
import THead from "./THead";
import Pagination from "./Pagination";
import Loading from "../Loading/Loading";
import SearchCoin from "./SearchCoin";

const ListCoin = (props) => {
  const [search, setSearch]= useState(()=> "")
  const [data, setData] = useState(() => []);
  const [sort, setSort]= useState(()=> {})
  const [{start, end}, setPaginate]= useState(()=> ({
    start: 0,
    end: 50
  }))
  // eslint-disable-next-line
  const { ref, inView, entry } = useInView({
    threshold: false,
  });
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `${SERVER_URL}/api/dit/me/han/xeng`,
        method: "get",
        responseType: "json",
      });
      const result = await res.data;
      setData(() => result);
    })()
  }, []);
  
  return (
    <div className="jklsjkldkljsdokdssd" style={{height: "calc(100vh - 60px)"}}>
      <div ref={ref}></div>
      {data?.data?.length > 0 && (
        <div id="agjoirfjaisejfsieds" className="fkpjfksdrfjkolsda" style={{height: "103%"}}>
          <SearchCoin setSearch={setSearch} />
          <table className="raikpoekjlkejwke" style={{ width: "100%" }}>
            <THead sort={sort} setSort={setSort} />
            <MainList search={search} start={start} end={end} sort={sort} data={data.data} />
            <Pagination start={start} end={end} sum={data?.data?.length} setPaginate={setPaginate} />
          </table>
          {inView === false && <ScrollToBottom></ScrollToBottom>}
        </div>
      )}
      {data?.length <= 0 && (
        <Loading />
      )}
    </div>
  );
};

export default ListCoin;
