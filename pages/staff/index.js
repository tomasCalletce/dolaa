
import { Box , Text, Input, Button, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

// components
import Header from '../../components/header'
import StaffBox from '../../components/staffBox'

// models 
import User from '../../db/models/User'


export async function getServerSideProps() {
  const staff = []
  const users = await User.find({})
  
  for (const user of users) {
      staff.push({id:user._id,discordUsername:user.discordUsername})
  }

  const returnVal = {
    staff : staff
  }
  const parsedData = JSON.parse(JSON.stringify(returnVal))
  return { props: { data : parsedData } }

}

function Staff({data}) {

  const [staffBoxes,setStaffBoxes] = useState([])

  useEffect(()=>{
    let contador = -1
    const staff = data.staff.map((entry)=>{
      contador++
      console.log(entry)
      return (
        <Link href={`/blog/${entry.id}`}>
          <a>
            <StaffBox id={entry.id} discordUsername={entry.discordUsername} key={contador} />
          </a>
        </Link>
      )
    })
    setStaffBoxes(staff)
  },[])

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
              {staffBoxes}
          </Box>
      </Box>
  
    </Box>
  )
}
export default Staff