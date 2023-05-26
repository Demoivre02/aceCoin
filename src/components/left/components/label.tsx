import {Text,VStack} from '@chakra-ui/react'


interface props {
    name:string
    content: string
}

export default function Label({name,content}: props) {
  return (
    <VStack fontFamily={'DM Sans'} alignItems={"flex-start"}>
        <Text  fontWeight={"700"}color={"#1E2A53"}  >{name}</Text>
        <Text fontSize={"13px"} fontWeight={"500"} color={"#B8BCCB"} >{content}</Text>
    </VStack>
  )
}
