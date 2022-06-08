import { Box , Heading, Text } from '@chakra-ui/react'

function ListValue({cellPhone,date,userName}) {
  return (
    <Box as='a' w="100%" display="flex" p="3" pr="4" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" borderBottom='1px' borderColor='gray.200'>  
        <Box w="30%" color="#234E52"><Text>{cellPhone}</Text></Box>
        <Box w="30%" color="#234E52"><Text>{date}</Text></Box>
        <Box w="60%" display="flex" justifyContent="flex-end"color="#234E52" ><Text>{userName}</Text></Box>
    </Box>
  )
}
export default ListValue