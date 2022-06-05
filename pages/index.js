
import { Box, Heading, Text, Input, Button } from '@chakra-ui/react'

import Header from '../components/header'
import DataBox from '../components/dataBox'
import ListValue from '../components/listValue'

import { useState, useEffect } from 'react'

function searchByClient() {
}
async function getAllUsers() {
   
}
export default function Home() {

  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastMessages, setLastMessages] = useState(0);

  useEffect(() => {
    const get = async()=>{
      const req = await fetch('/api/getAllUsers');
      console.log(req)
    const newRecent = [];
    for(let i of req){
      newRecent.push(<ListValue m = {i.message} />)
    } 
    return newRecent
    }
  
    setRecent(get());
  })

  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
      <Header />
      <Box w="100%">
        <Box w="100%" height="10vh" bg="#319795" display="flex" justifyContent="space-between" alignItems="center" pl="3" pr="3">
          <DataBox mensajes={lastMessages} />
        </Box>
        <Box w="100%" pl="3" pr="3" display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="4xl" fontWeight="hairline" >Chats Recientes</Text>
          <Box w="30%" display="flex">
            <Button colorScheme='teal' mr="1" >Buscar</Button>
            <Input placeholder='Buscar' border="1px" borderColor='gray.400' />
          </Box>
        </Box>
        <Box w="100%">
          <Box display="flex" p="3" borderBottom='1px' borderTop="1px" borderColor='gray.200' bg='white' pr="4">
            <Box w="30%" color="#234E52"><Text>Cliente</Text></Box>
            <Box w="30%" color="#234E52"><Text>Fecha</Text></Box>
            <Box w="60%" display="flex" justifyContent="flex-end" color="#234E52" ><Text>Staff</Text></Box>
          </Box>
          <Box w="100%" height="100%" bg="#E6FFFA" display="flex" flexDirection="column">
            {recent}
          </Box>
        </Box>
      </Box>

    </Box>
  )
}
