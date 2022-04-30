import { Box , Heading, Text, Avatar } from '@chakra-ui/react'

function StaffBox() {
  return (
    <Box as='a' w="100%" display="flex" p="3" pr="4" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" borderBottom='1px' borderColor='gray.200' alignItems="center" justifyContent="center" >  
        <Box w="100%" display="flex" alignItems="center" boxShadow='xs' p='1' bg="#E6FFFA" mb="1" >
            <Box w="100%">
                <Text fontSize="md" color="#234E52">Juan Camilo</Text>
                <Text fontSize="xs" mt="-2" color="#234E52" fontWeight="light">admin</Text>
            </Box>
            <Avatar
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            mr="5%"
            />
        </Box>
    </Box>
  )
}
export default StaffBox