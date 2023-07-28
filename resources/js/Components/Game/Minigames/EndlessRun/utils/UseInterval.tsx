import { useEffect, useRef } from "react";

export function useInterval(callback: any, delay: any) {
    const savedCallback = useRef<any>();
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    useEffect(() => {
        let id = setInterval(() => {
            savedCallback.current();
        }, delay);
        return () => clearInterval(id);
    }, [delay]);
}