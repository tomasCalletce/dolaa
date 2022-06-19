
import { Box, Heading, Text, Input, Button } from '@chakra-ui/react'
import React, { useState, useEffect,useRef} from 'react'

// helpers
import moment from 'moment'

// components
import Header from '../components/header'
import DataBox from '../components/dataBox'
import ListValue from '../components/listValue'

// db models 
import Customer from '../db/models/Costumer'
import User from '../db/models/User'


export async function getServerSideProps() {

  // Fetch data from external API
  const customerWithMesseges = []
  let numCustomersToday = 0
  let numCustomersWeek = 0;
  let numCustomersLastWeek = 0;
  
  const customers = await Customer.find({},{"messages":{$slice: -1}})
  
  for (const customer of customers) {
      if(customer.messages[0]){
        const time = moment(customer.messages[0].time)
        const today = moment()
        if(time.dayOfYear() === today.dayOfYear()){
          numCustomersToday++;
        }
        if(time.weekYear() === today.weekYear()){
          numCustomersWeek++;
        }
        if(time.weekYear() === today.weekYear()-1){
          numCustomersLastWeek++;
        }
        customerWithMesseges.push(customer)
      }
  }

  customerWithMesseges.sort((a, b) => {
    a = moment(a.messages[0].time);
    b = moment(b.messages[0].time);
    if (a.isBefore(b)) {
      return 1;
    }
    if (b.isBefore(a)) {
      return -1;
    }
    return 0;
  })

  let recentCustomers;
  if(customerWithMesseges.length >= 15){
    recentCustomers = customerWithMesseges.splice(0,14)
  }else{
    recentCustomers = customerWithMesseges;
  }

  const data = []

  for (const customer of recentCustomers) {
    const user = await User.findOne({"_id" : customer.user})
    let cell = String(customer.cellPhone)
    data.push({
          username : user.username,
          cellPhone : cell.slice(0,cell.length-5),
          time : moment(customer.messages[0].time).format("dddd, MMMM Do YYYY, h:mm:ss a")
    })
  }

  const returnVal = {
    arr : data,
    numCustomersToday,
    numCustomersWeek,
    numCustomersLastWeek
  }

  const parsedData = JSON.parse(JSON.stringify(returnVal))
  
  return { props: { data : parsedData } }
}


export default function Home({ data }) {

  const [viewRecentMessages,setViewRecentMessages] = useState([])
  const [recentMesseges, setRecentMesseges] = useState([])
  const [numCustomersToday,setNumCustomersToday] = useState(0)
  const [numCustomersWeek,setNumCustomersWeek] = useState(0)

  const [numCustomersLastWeek,setNumCustomersLastWeek] = useState(0)
  const [loading, setLoading] = useState(true)

  const inputVal = useRef(0);

  useEffect(()=>{
    setNumCustomersToday(data.numCustomersToday)
    setNumCustomersWeek(data.numCustomersWeek)
    setNumCustomersLastWeek(data.numCustomersLastWeek)
    let contador = -1
    const messages = data.arr.map((entry)=>{
      contador++
      return <ListValue cellPhone={entry.cellPhone} date={entry.time} userName={entry.username} key={contador} />
    })
    setRecentMesseges(messages)
    setViewRecentMessages(messages)
  },[])

  const buscar = ()=>{
    const input = inputVal.current.value//.current da el valor en html

    for(let i of recentMesseges){
      if(i.props.cellPhone.includes(input)){
        setViewRecentMessages(i);
      }
    }
  }
  
  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
      <Header />
      <Box w="100%">
        <Box w="100%" height="10vh" bg="#319795" display="flex" justifyContent="space-between" alignItems="center" pl="3" pr="3">
          <DataBox description={"mensajes hoy"} number={numCustomersToday} />
          <DataBox description={"mensajes esta semana"} number={numCustomersWeek} />
          <DataBox description={"mensajes semana anterior"} number={numCustomersLastWeek} />
        </Box>
        <Box w="100%" pl="3" pr="3" display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="4xl" fontWeight="hairline" >Chats Recientes</Text>
          <Box w="30%" display="flex">
            <Button colorScheme='teal' mr="1" onClick={buscar} >Buscar</Button>
            <Input ref={inputVal} placeholder='Buscar' border="1px" borderColor='gray.400' />
          </Box>
        </Box>
        <Box w="100%">
          <Box display="flex" p="3" borderBottom='1px' borderTop="1px" borderColor='gray.200' bg='white' pr="4">
            <Box w="30%" color="#234E52"><Text>Cliente</Text></Box>
            <Box w="30%" color="#234E52"><Text>Fecha</Text></Box>
            <Box w="60%" display="flex" justifyContent="flex-end" color="#234E52" ><Text>Staff</Text></Box>
          </Box>
          <Box w="100%" height="100%" bg="#E6FFFA" display="flex" flexDirection="column">
              {viewRecentMessages}
          </Box>
        </Box>
      </Box>

    </Box>
  )
}
