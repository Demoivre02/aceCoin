import Label from "./label";
import {HStack} from '@chakra-ui/react'
import { Input ,InputGroup ,InputRightAddon} from '@chakra-ui/react'
import { Icon } from '@iconify/react';

const Password = () => {
    return ( 
        <HStack justifyContent={"space-between"} alignItems={"center"}>
            <Label name="Password" content="Enter your Dynamic Password"/>
            <InputGroup size='lg' ring={1}  w={"300px"} rounded={"6px"} ringColor={"#BDBDBD"}>
                <Input placeholder='********' fontWeight={"700"} type='password' borderInline={0} _focus={{outline:0,border:0,bg:"#ECF3FE"}} />
                <InputRightAddon bg={"transparent"} children={<Icon icon="subway:menu" color="#bdbdbd" width="20" />} />
            </InputGroup>
        </HStack>
     );
}
 
export default Password;