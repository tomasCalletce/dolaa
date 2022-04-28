
import { Box , Heading, Text } from '@chakra-ui/react'

import Header from './components/header'

export default function Home() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
      <Header/>
      <Box bg="lightcoral" w="85%">

      </Box>
    </Box>
  )
}
