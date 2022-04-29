
import { Box , Heading, Text } from '@chakra-ui/react'

import Header from './components/header'
import DataBox from './components/dataBox'
import ListValue from './components/listValue'

export default function Home() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
      <Header/>
    
      <Box w="100%">
          <Box w="100%" height="10vh" bg="#319795" display="flex" justifyContent="space-between" alignItems="center" pl="3" pr="3">
            <DataBox/>
            <DataBox/>
            <DataBox/>
          </Box>
          <Box w="100%" pl="3" pr="3">
              <Text fontSize="4xl" fontWeight="hairline" >Chats Recientes</Text>
          </Box>
          <Box w="100%">
            <Box display="flex" p="3" borderBottom='1px' borderTop="1px" borderColor='gray.200'  bg='white' pr="4">
              <Box w="30%" color="#234E52"><Text>Cliente</Text></Box>
              <Box w="30%" color="#234E52"><Text>Fecha</Text></Box>
              <Box w="60%" display="flex" justifyContent="flex-end"color="#234E52" ><Text>Staff</Text></Box>
            </Box>
            <Box w="100%" height="100%" bg="#E6FFFA" display="flex" flexDirection="column">
              <ListValue/>
              <ListValue/>
              <ListValue/>
            </Box>
          </Box>
      </Box>
  
    </Box>
  )
}
