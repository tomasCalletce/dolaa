
import { Box , Heading, Text } from '@chakra-ui/react'

function DataBox({mensajes}) {
  return (
    <Box w="20%" height="80%" display="flex" boxShadow='base' rounded='md' bgGradient="linear(to-b,#f9f9ff,#ebfcff)">  
        <Box width="40%" height="100%" display="flex" alignItems="center" justifyContent="center" bg="#234E52">
            <Text fontWeight="hairline" fontSize="5xl" color="white">{mensajes}</Text>
        </Box>
        <Box width="60%" height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent="center" >
            <Text fontSize="2xl" mb="-2">Mensajes</Text>
            <Text fontSize="x-small">En la ultima semana</Text>
        </Box>
        
    </Box>
  )
}
export default DataBox