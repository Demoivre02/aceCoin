import {Box, Text,Flex,HStack,VStack} from '@chakra-ui/react'
import { Icon } from '@iconify/react';

const Order = () => {
    return ( 
        <Box bg={"#E7EAEE"} w={"70%"} h={"80%"} display={"flex"} alignSelf={"flex-end"} rounded={"8px"}>
            <Box alignSelf={"flex-end"} w={"full"} h={"fit-content"}>
                <Flex my={"10px"} px={"1em"} justifyContent={"space-between"}>
                    <Text fontFamily={'DM Sans'} fontSize={"14px"} color={"#9BA2B8"} >Company</Text>
                    <HStack>
                        <Icon icon="jam:apple-circle" color="#1E2A53" width="20" />
                        <Text fontFamily={'DM Sans'} color={"#1E2A53"} fontSize={"14px"} fontWeight={"700"} >Apple</Text>
                    </HStack>
                </Flex>
                <Flex my={"10px"} px={"1em"} justifyContent={"space-between"}>
                    <Text fontFamily={'DM Sans'} fontSize={"14px"} color={"#9BA2B8"} >Order Number</Text>
                    <Text fontFamily={'DM Sans'} color={"#1E2A53"} fontSize={"14px"} fontWeight={"700"} >1266201</Text>
                </Flex>
                <Flex my={"10px"} px={"1em"} justifyContent={"space-between"}>
                    <Text fontFamily={'DM Sans'} fontSize={"14px"} color={"#9BA2B8"} >Product</Text>
                    <Text fontFamily={'DM Sans'} fontSize={"14px"} fontWeight={"700"} >MacBook Air</Text>
                </Flex>
                <Flex my={"10px"} px={"1em"} justifyContent={"space-between"}>
                    <Text fontFamily={'DM Sans'} fontSize={"14px"} color={"#9BA2B8"} >VAT (20%)</Text>
                    <Text fontFamily={'DM Sans'} color={"#1E2A53"} fontWeight={"700"} fontSize={"14px"} >$100.00</Text>
                </Flex>
                
                <Box borderTop={"2px"} my={"1em"} borderStyle={"dashed"} borderColor={"#bdbdbd"} ></Box>

                <Flex my={"10px"} px={"1em"} alignItems={"center"} py={"10PX"} justifyContent={"space-between"}>
                    <VStack>
                        <Text fontFamily={'DM Sans'} fontSize={"14px"} color={"#9BA2B8"} >You have to pay</Text>
                        <Text fontFamily={'DM Sans'} color={"#1E2A53"} fontWeight={"700"} fontSize={"24px"} >549. <span className='span1' >99</span> <span className='span2' >USD</span> </Text>
                    </VStack>
                    <Icon icon="bxs:receipt" color="#9BA2B8" width="30" />
                </Flex>
            </Box>
        </Box>
     );
}
 
export default Order;