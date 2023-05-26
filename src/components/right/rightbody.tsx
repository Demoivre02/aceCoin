import {Box} from '@chakra-ui/react'
import CardDetails from './components/cardDetails';
import Order from './components/order';

const Rightbody = () => {
    return ( 
        <Box pos={"relative"} rounded={"8px"} w={"40%"} h={"full"} display={"flex"} justifyContent={"center"} >
            <Box w={"60px"} zIndex={1} h={"7px"} boxShadow={"20px #008AEA"} bg={"#008AEA"} position={"absolute"} m={"auto"}  top={0} ></Box>
            <CardDetails/>
            <Order/>
        </Box>
     );
}
 
export default Rightbody;