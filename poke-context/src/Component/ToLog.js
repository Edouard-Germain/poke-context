import { Link } from "react-router-dom"
import { Flex, Button } from "@chakra-ui/react"


const ToLog =()=>{
    return (
    <div>
        <h2>Et si tu te connectais ?</h2>
        <Link to="/login">
        <Button colorScheme="teal" variant="ghost" ml={5}>
          Login
        </Button>
      </Link>
    </div>
)}

export default ToLog