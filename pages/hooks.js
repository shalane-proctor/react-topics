import React, { useEffect, useState } from 'react';

export default function Hooks() {
  const [stateHook, setStateHook] = useState('State Hook Default Value');

  // useEfect will start the timer and after the component renders, will rerender adter 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStateHook('The useEffect Loaded Me!');
    }, 5000);
    const timer2 = setTimeout(() => {
      setStateHook('Yay Effects!!!!');
    }, 5000);
    return () => clearTimeout(timer, timer2);
  }, []);

  return <div>{stateHook}</div>;
}
