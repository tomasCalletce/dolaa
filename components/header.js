import { Avatar, Box , Heading, Text, Input, Icon,LinkOverlay } from '@chakra-ui/react'
import { AiFillHome, AiOutlineTeam } from "react-icons/ai";

import Link from 'next/link'

function Header() {
  return (
    <Box w="15%" display="flex" flexDirection="column" alignItems="center" borderRight='1px' borderColor='gray.200'>
        <Box width="90%" mt="2">
            <Heading fontWeight="bold" fontSize="3xl" color="#234E52">Dola</Heading>
        </Box>
        <Box w="90%" display="flex" alignItems="center" boxShadow='xs' p='1' bg="#E6FFFA" mb="2" >
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
        <Box width="100%" height="80%" display="flex" flexDirection="column" alignItems="center" borderTop="1px" borderColor='gray.200' >
            <Box width="90%" display="flex" flexDirection="column" justifyContent="center">
            <Link href='/' as="/">
                <a>
                <Box display="flex" alignItems="center" w="100%" mb="1" mt="1">
                    <Icon as={AiFillHome} mr="2" w={6} h={6} color="#319795"></Icon>
                    <Text fontSize="sm" fontWeight="bold" color="#319795">Home</Text>
                </Box>
                </a>
            </Link>
            <Link href='/staff' as="/staff">
                <a>
                <Box  display="flex" alignItems="center" w="100%" mb="1">
                    <Icon as={AiOutlineTeam} mr="2" w={6} h={6} color="#234E52"></Icon>
                    <Text fontSize="sm" fontWeight="bold" color="#234E52">Staff</Text>
                </Box>
                </a>
            </Link>
            </Box>
        </Box>
    </Box>
  )
}
export default Header