import { Container, Heading } from "@chakra-ui/react";
import { useState } from "react";

import MenuComponent from "../components/MenuComponent";
import OverallGraph from "../graphs/OverallGraph"
import DatabaseSelect from "../components/DatabaseSelect";


export default function Main() {
    const [database, setDatabase] = useState(0); //default page

    return (
    <Container maxW="4xl" bg="gray.300" py="15px">
        <Heading my="15px" >Database: </Heading>
        <DatabaseSelect database={database} setDatabase={setDatabase}/>

        <Heading my="15px" >Overall Data: </Heading>
        <OverallGraph database={database}/>

        <Heading my="15px" >Daily Data: </Heading>
        <MenuComponent database={database}/>
    </Container>
    );
}
