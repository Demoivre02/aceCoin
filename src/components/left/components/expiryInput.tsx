import React, { useRef, useState } from 'react';
import {Input, HStack,Box} from '@chakra-ui/react'

function Exipiryinput() {
  const [expiryMonth, setExpiryMonth] = useState('09');
  const [expiryYear, setExpiryYear] = useState('22');
  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const monthValue = event.target.value;
    setExpiryMonth(monthValue);

    if (monthValue.length === 2 && yearInputRef.current) {
      yearInputRef.current.focus();
    }
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue = event.target.value;
    setExpiryYear(yearValue);

    if (yearValue.length === 2 && monthInputRef.current) {
      monthInputRef.current.focus();
    }
  };

  return (
    <Box w={"300px"}>
      <HStack>
        <Input
        h={"48px"}
          type="number"
            fontWeight={"700"}
            textAlign={"center"}
             ringColor={"#BDBDBD"}
             color={"#718096"}
             _focus={{bg:"#ECF3FE"}}
            ring={1}
             value={expiryMonth}
          onChange={handleMonthChange}
          maxLength={2}
          ref={monthInputRef}
        />
        <span className='slash' >/</span>
        <Input
        h={"48px"}
          type="number"
          fontWeight={"700"}
          textAlign={"center"}
           ringColor={"#BDBDBD"}
           color={"#718096"}
           _focus={{bg:"#ECF3FE"}}
            ring={1}
           value={expiryYear}
          onChange={handleYearChange}
          maxLength={2}
          ref={yearInputRef}
        />
      </HStack>
    </Box>
  );
}

export default Exipiryinput;
