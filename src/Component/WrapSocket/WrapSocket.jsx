import React, { createContext } from "react";
// import { useState, useEffect } from "react";
// import io from "socket.io-client"
// import { SOCKET_URL } from "../config/config";

export const SocketContext = createContext();
const WrapSocket = ({ children }) => {
  // const [socketState, setSocketState]= useState()
  // useEffect(()=> {
  //   const socket= io(`${SOCKET_URL}`, {transports: ["websocket"]})
  //   setSocketState(()=> socket)
  //   return ()=> {
  //     socket.close()
  //   }
  // }, [])
  return (
    <SocketContext.Provider value={{isSocket: true}}>
      {children}
    </SocketContext.Provider>
  );
};

export default WrapSocket;
