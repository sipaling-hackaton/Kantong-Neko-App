import React from 'react';

export const useAnimationFrame = (callback : any) => {
    const requestRef = React.useRef<any>();
    const previousTimeRef = React.useRef<any>();

    const animate = (time: any) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current;
            callback(deltaTime)
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }

    React.useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []); // Make sure the effect runs only once
}
