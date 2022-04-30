
import { Box , Text, Input, Button } from '@chakra-ui/react'

import Header from '../../components/header'
import StaffBox from '../../components/staffBox'

function Staff() {
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
      <Header/>
    
      <Box w="100%">
          <Box w="100%" pl="3" pr="3" display="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="4xl" fontWeight="hairline" >Empleados </Text>
              <Box w="30%" display="flex">
                <Input placeholder='Buscar' border="1px" borderColor='gray.400' />
                <Button colorScheme='teal' ml="1" >Buscar</Button>
              </Box>
          </Box>
          <Box w="100%"  bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" flexDirection="column">
              <StaffBox/>
              <StaffBox/>
              <StaffBox/>
              <StaffBox/>
              <StaffBox/>
              <StaffBox/>
          </Box>
      </Box>
  
    </Box>
  )
}
export default Staff