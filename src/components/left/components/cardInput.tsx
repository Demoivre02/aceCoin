import { Input,Image, Box ,InputGroup ,
    InputLeftAddon,InputRightAddon} from '@chakra-ui/react'
import { Icon } from '@iconify/react';

const Cardinput = () => {
    return ( 
        <Box my={"1em"} >
            <InputGroup size='lg' ring={1}  rounded={"6px"} ringColor={"#BDBDBD"}>
                <InputLeftAddon bg={"transparent"}  children={<Image src='/ms.png' alt='mastercard' w={"30px"} h={"20px"} />} />
                <Input  placeholder='2032-5678-8573-9009' type='number' borderInline={0} _focus={{outline:0,border:0,bg:"#ECF3FE"}} />
                <InputRightAddon bg={"transparent"} children={<Icon icon="heroicons:check-badge-20-solid" color="#008AEA" width="30" />} />
            </InputGroup>

        </Box>
     );
}
 
export default Cardinput;