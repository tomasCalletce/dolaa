import { Box , Heading, Text } from '@chakra-ui/react'

function ListValue() {
  return (
    <Box as='a' w="100%" display="flex" p="3" pr="4" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" borderBottom='1px' borderColor='gray.200'>  
        <Box w="30%" color="#234E52"><Text>3522432</Text></Box>
        <Box w="30%" color="#234E52"><Text>hoy 34:234</Text></Box>
        <Box w="60%" display="flex" justifyContent="flex-end"color="#234E52" ><Text>manuela</Text></Box>
    </Box>
  )
}
export default ListValue