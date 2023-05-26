import Label from "./label";
import {useState} from 'react'
import {HStack} from '@chakra-ui/react'
import { Input ,InputGroup ,InputRightAddon} from '@chakra-ui/react'
import { Icon } from '@iconify/react';

const Cvv = () => {
    const [value,setValue]=  useState('')

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const myValue = e.target.value;
        if (myValue.length <= 3) {
          setValue(myValue);
        }
      }
      

    return ( 
        <HStack justifyContent={"space-between"} my={"2em"} alignItems={"center"}>
            <Label name="CVV Number" content="Enter the 3 or 4 digit number on the card"/>
            <InputGroup size='lg' ring={1}  w={"300px"} rounded={"6px"} ringColor={"#BDBDBD"}>
                <Input value={value} color={"#1E2A53"} onChange={handleChange} placeholder='327' fontWeight={"700"} type='number' borderInline={0} _focus={{outline:0,border:0, bg:"#ECF3FE"}} />
                <InputRightAddon bg={"transparent"} children={<Icon icon="subway:menu" color="#bdbdbd" width="20" />} />
            </InputGroup>
        </HStack>
     );
}
 
export default Cvv;