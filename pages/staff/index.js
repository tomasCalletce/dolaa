
import { Box , Text, Input, Button, Link } from '@chakra-ui/react'
import { useEffect, useState, useRef } from 'react'

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
  const [viewStaffBoxes,setViewStaffBoxes] = useState([])
  const inputVal = useRef(0);

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
    setViewStaffBoxes(staff)
  },[])

  const buscar = ()=>{
    const input = inputVal.current.value
    if(input == ""){
      setViewStaffBoxes(staffBoxes)
  }else{
      for(let user of staffBoxes){
        if(user.props.children.props.children.props.discordUsername.includes(input)){
          setViewStaffBoxes(user);
        }
      }
    }
  }

  return (
    <Box w="100%" h="100vh" bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" >
      <Header/>
    
      <Box w="100%">
          <Box w="100%" pl="3" pr="3" display="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="4xl" fontWeight="hairline" >Empleados </Text>
              <Box w="30%" display="flex">
                <Input ref={inputVal} placeholder='Buscar' border="1px" borderColor='gray.400' />
                <Button onClick={buscar} colorScheme='teal' ml="1" >Buscar</Button>
              </Box>
          </Box>
          <Box w="100%"  bgGradient="linear(to-b,#f9f9ff,#ebfcff)" display="flex" flexDirection="column">
              {viewStaffBoxes}
          </Box>
      </Box>
  
    </Box>
  )
}
export default Staff