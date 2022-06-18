import { useRouter } from "next/router"
import { Box , Text, Input, Button } from '@chakra-ui/react'
import { useState, useEffect} from 'react'

// components 
import Header from '../../components/header'
import ListValue from "../../components/listValue"

// helpers
import axios from "axios"
import Link from 'next/link'


function StaffMember(){
    const router = useRouter()
    const id = router.query.id
    const [clients,setClients] = useState([])
    const [discordUserName,setDiscordUserName] = useState()

    useEffect(()=>{
        if(id){
            async function main(){
                const staff = await axios.post('/api/getStaff', {
                    id : id
                })
                console.log(staff)
                setDiscordUserName(staff.data.data[0].discordUsername)
                const data = await axios.post('/api/getCustomers', {
                    id : id
                })
                let contador = 0
                const clients = data.data.data.map((entry)=>{
                    contador++
                    console.log(entry)
                    return (
                    <Link href={`https://api.whatsapp.com/send?phone=${entry.cellPhone}`}>
                        <a>
                            <ListValue cellPhone={entry.cellPhone} date={entry.lastMessage.time} key={contador}/>
                        </a>
                    </Link>
                    )
                })
                setClients(clients)
            }
            main()
        }
    },[])

    return (
        <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
        <Header/>
      
        <Box w="100%">
            <Box w="100%" pl="3" pr="3" display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="4xl" fontWeight="hairline" >{discordUserName}</Text>
                <Box w="30%" display="flex">
                  <Input placeholder='Buscar' border="1px" borderColor='gray.400' />
                  <Button colorScheme='teal' ml="1" >Buscar</Button>
                </Box>
            </Box>
            <Box w="100%">
                <Box display="flex" p="3" borderBottom='1px' borderTop="1px" borderColor='gray.200'  bg='white' pr="4">
                    <Box w="30%" color="#234E52"><Text>Cliente Cell</Text></Box>
                    <Box w="30%" color="#234E52"><Text>Fecha</Text></Box>
                </Box>
                <Box w="100%" height="100%" bg="#E6FFFA" display="flex" flexDirection="column">
                    {clients}
                </Box>
          </Box>
        </Box>
    
      </Box>
    )
}
export default StaffMember