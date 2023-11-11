import { Menu, MenuButton, MenuList, MenuItem, Button, HStack, Text, Heading } from '@chakra-ui/react'
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

import DayGraph from "./DayGraph";
import { callAPI } from '../funcs';


const getDate = (name) => {
    if (typeof name != "string") return;
    const schemaSplit = name.split("_");
    const month = parseInt(schemaSplit[4]) - 1; // zero index
    const date  = schemaSplit[5];
    const year  = schemaSplit[6];
    const hour  = schemaSplit[7];
    const min  = schemaSplit[8];
    const sec  = schemaSplit[9];
    return new Date(year, month, date, hour, min, sec);
}

const compareDates = (n1, n2) => {
    return  n1.getDate() === n2.getDate() &&
            n1.getFullYear() === n2.getFullYear() &&
            n1.getMonth() === n2.getMonth() ; 
}


export default function MenuComponent({ database }) {

    const [schemaNames, setNames] = useState([]);               //needed for index of database
    const [schemaNamesSorted, setNamesSorted] = useState([]);   //needed for display order
    const [displayNames, setDisplayNames] = useState([]);       //needed for display duplicates
    const [cur, setCur] = useState(0); //default page

    useEffect(() => {
        callAPI(`http://127.0.0.1:5001/get_schemata/${database}`, processNames)
    }, [database]);

    const processNames = (names) => {
        names = names.map( item => item[0] );

        setNames(names);
        names.sort(getDate)
        setNamesSorted(names);
    
        const display = Array(names.length).fill(0); //adds (num) to date
        for (let i=0; i < names.length -1; i ++){
            if (compareDates( getDate(names[i]), getDate(names[i+1]))){
                display[i+1] = display[i] + 1;
            }
        }
        setDisplayNames(display);
    }

    return (
        <div>
            <HStack my="15px">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Select Date
                    </MenuButton>
                    <MenuList>
                        {schemaNamesSorted.map((name, index) => (
                        <MenuItem key={index} onClick={() => {setCur(schemaNames.indexOf(name))}}>
                            {getDate(name).toDateString() 
                            + (displayNames[index] ? ` (${displayNames[index]})`: "")}
                        </MenuItem>
                        ))}
                        {schemaNamesSorted.length === 0 && <MenuItem>No Days Available</MenuItem>}
                    </MenuList>
                </Menu>
                <Heading size="md">Current Day: </Heading>
                {schemaNames.length === 0 && <Text>No Days Available</Text>}
                {schemaNames.length !== 0 && <Text>{getDate(schemaNames[cur]).toDateString() + (displayNames[cur] ? ` (${displayNames[cur]})`: "")}</Text>}

            </HStack>
            <DayGraph page={cur} database={database}></DayGraph>
        </div>
        
    );
}
