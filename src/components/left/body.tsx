import Timeflex from "./components/timeflex";
import Form from "./components/form";
import {VStack} from '@chakra-ui/react'

const Leftbody = () => {
    return ( 
        <VStack w={"60%"} justifyContent={"flex-start"}>
            <Timeflex />
            <Form/>
        </VStack>
     );
}
 
export default Leftbody;