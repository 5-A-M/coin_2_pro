import { useEffect } from "react";
import { useRef } from "react";
import fakesleep from "../docs/fakesleep";

export default function usePrevious(value) {
    const ref= useRef()
    useEffect(()=> {
        (async()=> {
            await fakesleep(650)
            ref.current= value
        })()
    }, [value])
    return ref.current
}

export function usePrevious2(value) {
    const ref= useRef()
    useEffect(()=> {
        (async()=> {
            await fakesleep(500)
            ref.current= value
        })()
    }, [value])
    return ref.current
}