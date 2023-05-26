import Label from "./label";
import {HStack} from '@chakra-ui/react'
import Exipiryinput from "./expiryInput";


const Expiry = () => {
    return ( 
        <HStack my={"2em"} justifyContent={"space-between"} alignItems={"center"}>
            <Label name="Expiry Date" content="Enter the expiration date of the card"/>
            <Exipiryinput/>
        </HStack>
     );
}
 
export default Expiry;