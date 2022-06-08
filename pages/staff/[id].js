import { useRouter } from "next/router"
import { Box , Text, Input, Button } from '@chakra-ui/react'
import { useState, useEffect} from 'react'

// components 
import Header from '../../components/header'
import StaffBox from '../../components/staffBox'
import ListValue from "../../components/listValue"

import { connect } from 'mongoose';
import Customer from '../../db/models/Costumer';


function StaffMember(props){
    const router = useRouter();
    const id = router.query.id;
    const [clients,setClients] = useState([]);

    useEffect(()=>{
        async function fetchMyAPI() {
            let response = await Customer({user:id});
            console.log(response);
          }
          // call the function
        const result = fetchMyAPI()
        // make sure to catch any error
        .catch(console.error);;
        console.log(result)
    },[])

    return (
        <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
        <Header/>
      
        <Box w="100%">
            <Box w="100%" pl="3" pr="3" display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="4xl" fontWeight="hairline" >{id}</Text>
                <Box w="30%" display="flex">
                  <Input placeholder='Buscar' border="1px" borderColor='gray.400' />
                  <Button colorScheme='teal' ml="1" >Buscar</Button>
                </Box>
            </Box>
            <Box w="100%">
                <Box display="flex" p="3" borderBottom='1px' borderTop="1px" borderColor='gray.200'  bg='white' pr="4">
                    <Box w="30%" color="#234E52"><Text>Cliente Cell</Text></Box>
                    <Box w="30%" color="#234E52"><Text>Fecha</Text></Box>
                    <Box w="60%" display="flex" justifyContent="flex-end"color="#234E52" ><Text>Interacciones</Text></Box>
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
export default StaffMember