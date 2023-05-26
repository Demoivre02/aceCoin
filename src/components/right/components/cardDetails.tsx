import {VStack, Box,Text,Image,HStack} from '@chakra-ui/react'
import { Icon } from '@iconify/react';

const CardDetails = () => {
    return ( 
        <VStack w={"50%"} justifyContent={"space-between"} rounded={"12px"}  backdropFilter={"blur (40px)"} bg={"#f9f9f9"} position={"absolute"} top={0} zIndex={0}  shadow={"md"}  p={4} h={"300px"} >
            <HStack justifyContent={"space-between"} w={"full"} mt={"2em"} >
                <Icon icon="fa6-solid:sim-card" color="#bdbdbd" width="30" />
                <Icon icon="vaadin:signal" color="#394262" width="30" />
            </HStack>
            <Box alignSelf={"flex-end"} w={"full"}>
                <Text fontFamily={'DM Sans'} fontWeight={"500"} mb={"8px"} color={"#1E2A53"} fontSize={"16px"} >Jonathan Michael</Text>
                <Text fontFamily={'DM Sans'} fontWeight={"700"} color={"#1E2A53"} fontSize={"14px"} >**** 3456</Text>
                <HStack mt={"20px"} justifyContent={"space-between"}>
                    <Text fontFamily={'DM Sans'} fontWeight={"700"} color={"#1E2A53"} fontSize={"14px"} >09/22</Text>
                    <Image src='/textms.jpg' alt='mastercard' w={"50px"} h={"40px"} />
                </HStack>
            </Box>
           
        </VStack>
     );
}
 
export default CardDetails;