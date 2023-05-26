import {Flex,Box} from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import Leftbody from './left/body';
import Rightbody from './right/rightbody';

const Body = () => {
    return ( 
        < Flex w={"1000px"} pos={"relative"} maxWidth={"1200px"} py={"4em"} h="700px" bg={"#fff"} pl={"2em"} rounded={"1px"} >
            <Box pos={"absolute"} m={".6em"} right={0} top={0} >
                <Icon icon="ic:round-close" color='#1E2A53' width="25" />
            </Box>
                <Leftbody/>
                <Rightbody/>
        </Flex>
     );
}
 
export default Body;