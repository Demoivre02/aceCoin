import Body from './components/body'
import { ChakraProvider,Box } from '@chakra-ui/react'

function App() {

  return (
    <>
    <Box bgImage={"/winows.jpg"} h={'100vh'} display={"flex"} justifyContent={"center"} alignItems={"center"} >
        <ChakraProvider >
          <Body/>
        </ChakraProvider>
      </Box>
    </>
  )
}

export default App
