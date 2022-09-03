import { HStack, Spacer, Link } from '@chakra-ui/react'
import logo from '../../assets/logo.png'

const Navbar = () => {
    return(
        <HStack>
            <img src={logo} alt="" />
            <Spacer />
            <HStack>
                <Link>Malbec</Link>
                <Link>Cabernet</Link>
            </HStack>
        </HStack>
    )
}

export { Navbar }