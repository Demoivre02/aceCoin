import Label from "./label"
import {HStack,Text,Button,Flex } from '@chakra-ui/react'
import { Icon } from '@iconify/react';
import Cardinput from "./cardInput";
import Cvv from "./cvv";
import Expiry from "./expiry";
import Password from "./password";

export default function Form() {
  return (
    <Flex flexDir={"column"} w={"full"} h={"full"} >
        <form>
            <HStack justifyContent={"space-between"} mb={"1em"} alignItems={"center"}>
                <Label name="Card Number" content="Enter the 16-digit card number on the card" />
                <HStack justifyContent={"center"} cursor={"pointer"} alignItems={"center"} gap={"2px"}>
                    <Icon icon="mdi:pencil" color="#0E60ED" width="20" />
                    <Text color={"#0E60ED"} fontWeight={"700"} fontFamily={'DM Sans'} >Edit</Text>
                </HStack>
            </HStack>
            <Cardinput/>
            <Cvv/>
            <Expiry/>
            <Password/>
            <Button alignSelf={"flex-end"} fontWeight={"600"} fontSize={"18px"} fontFamily={'DM Sans'} _hover={{bg:"#0F5284"}} mt={"3em"} type="submit" bg={"#0E60ED"} h={"58px"} color={"#fff"} textAlign={"center"} w={"full"} >
                Pay Now
            </Button>
        </form>
    </Flex >
  )
}
