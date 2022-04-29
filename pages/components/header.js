import { Avatar, Box , Heading, Text, Input, Icon } from '@chakra-ui/react'
import { AiFillHome, AiOutlineTeam } from "react-icons/ai";

export default function Header() {
  return (
    <Box w="15%" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between" borderRight='1px' borderColor='gray.200'>
        <Box width="90%">
            <Heading fontWeight="bold" fontSize="3xl" color="#234E52">Dolaa</Heading>
        </Box>
        <Box w="90%" display="flex" alignItems="center" boxShadow='xs' p='1' rounded='md' bg="#E6FFFA" >
            <Box w="100%" pl="5%">
                <Text fontSize="md" color="#234E52">Tomas Calle</Text>
                <Text fontSize="xs" mt="-2" color="#234E52" fontWeight="light">admin</Text>
            </Box>
            <Avatar
            size="sm"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            mr="5%"
            />
        </Box>
        <Input htmlSize={4} width="90%" placeholder="Serch" />
        <Box width="100%" height="80%" borderTop='1px' borderColor='gray.200' display="flex" flexDirection="column" alignItems="center" >
            <Box width="90%" display="flex" flexDirection="column" justifyContent="center">
                <Box as='a' display="flex" alignItems="center" w="100%" mb="1" mt="1">
                    <Icon as={AiFillHome} mr="2" w={6} h={6} color="#319795"></Icon>
                    <Text fontSize="sm" fontWeight="bold" color="#319795">Home</Text>
                </Box>
                <Box as='a' display="flex" alignItems="center" w="100%" mb="1">
                    <Icon as={AiOutlineTeam} mr="2" w={6} h={6} color="#234E52"></Icon>
                    <Text fontSize="sm" fontWeight="bold" color="#234E52">Staff</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}
