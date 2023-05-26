import  { useState, useEffect } from 'react';
import {Text} from '@chakra-ui/react'

function Countdown() {
  const [time, setTime] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const minutesFirstDigit = Math.floor(minutes / 10);
  const minutesSecondDigit = minutes % 10;
  const secondsFirstDigit = Math.floor(seconds / 10);
  const secondsSecondDigit = seconds % 10;

  return (
    <div>
      {time > 0 ? (
        <div className="countdown-container">
          <div className="digit-box">{minutesFirstDigit}</div>
          <div className="digit-box">{minutesSecondDigit}</div>
          <div className="separator">:</div>
          <div className="digit-box">{secondsFirstDigit}</div>
          <div className="digit-box">{secondsSecondDigit}</div>
        </div>
      ) : (
        <Text cursor={"pointer"} onClick={()=>{setTime(120)}} >Reset</Text>
      )}
    </div>
  );
}

export default Countdown;
