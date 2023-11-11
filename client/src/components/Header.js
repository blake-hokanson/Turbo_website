import { Container, Heading } from "@chakra-ui/react";


export default function Header() {
    return (
        <Container maxW="4xl" h="130px" bg="gray.500" display="flex" alignItems="center" >
            <Heading size='2xl'>Turbo Data Website</Heading>
        </Container>
    );
  }