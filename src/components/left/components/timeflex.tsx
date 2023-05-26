import {Flex, Box,Image} from '@chakra-ui/react'
import Countdown from './time';

const Timeflex = () => {
    return ( 
        <Flex justifyContent={"space-between"} w={"full"} mb={"1.5em"} alignItems={"center"}>
            <Box> <Image src='/acelogo.png' w={"auto"} h={"auto"} alt='Logo' /> </Box>
            <Countdown/>
        </Flex>
     );
}
 
export default Timeflex;