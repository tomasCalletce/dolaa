import { useRouter } from "next/router"
import { Box , Text, Input, Button } from '@chakra-ui/react'
import { useState, useEffect, useRef} from 'react'

// components 
import Header from '../../components/header'
import ListValue from "../../components/listValue"

// helpers
import axios from "axios"
import Link from 'next/link'
import moment from "moment"


function StaffMember(){
    const router = useRouter()
    const id = router.query.id
    const [clients,setClients] = useState([])
    const [clientsView,setClientsView] = useState([])
    const [discordUserName,setDiscordUserName] = useState()

    const inputVal = useRef(0);

    useEffect(()=>{
        if(id){
            async function main(){
                const staff = await axios.post('/api/getStaff', {
                    id : id
                })
                setDiscordUserName(staff.data.data[0].discordUsername)
                const data = await axios.post('/api/getCustomers', {
                    id : id
                })
                let contador = 0
                const clients = data.data.data.map((entry)=>{
                contador++
                return (
                    <Link href={`https://api.whatsapp.com/send?phone=${entry.cellPhone}`}>
                        <a>
                            <ListValue cellPhone={entry.cellPhone} date={moment(entry.lastMessage.time).format("dddd, MMMM Do YYYY, h:mm:ss a")} key={contador}/>
                        </a>
                    </Link>
                )
                })
                setClients(clients)
                setClientsView(clients)
            }
            main()
        }
    },[])

    const buscar = ()=>{
        const input = inputVal.current.value
        if(input == ""){
            setClientsView(clients)
        }else{
            for(let customer of clients){
                if(customer.props.children.props.children.props.cellPhone.includes(input)){
                    setClientsView(customer);
                }
            }
        }
    }

    return (
        <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
        <Header/>
      
        <Box w="100%">
            <Box w="100%" pl="3" pr="3" display="flex" justifyContent="space-between" alignItems="center">
                <Text fontSize="4xl" fontWeight="hairline" >{discordUserName}</Text>
                <Box w="30%" display="flex">
                  <Input ref={inputVal} placeholder='Buscar' border="1px" borderColor='gray.400' />
                  <Button onClick={buscar} colorScheme='teal' ml="1" >Buscar</Button>
                </Box>
            </Box>
            <Box w="100%">
                <Box display="flex" p="3" borderBottom='1px' borderTop="1px" borderColor='gray.200'  bg='white' pr="4">
                    <Box w="30%" color="#234E52"><Text>Cliente Cell</Text></Box>
                    <Box w="30%" color="#234E52"><Text>Fecha</Text></Box>
                </Box>
                <Box w="100%" height="100%" bg="#E6FFFA" display="flex" flexDirection="column">
                    {clientsView}
                </Box>
          </Box>
        </Box>
    
      </Box>
    )
}
export default StaffMember