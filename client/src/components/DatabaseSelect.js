import { Heading, Menu, MenuButton, MenuList, MenuItem, Button, HStack, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

import { callAPI } from '../funcs';

export default function DatabaseSelect({ database, setDatabase }) {

    const [databaseNames, setDatabaseNames] = useState([]); //default page

    useEffect(() => {
        callAPI(`http://127.0.0.1:5001/database_names`, setDatabaseNames);
    }, []);

    return (
        <div>
            <HStack my="15px">
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Select Database
                    </MenuButton>
                    <MenuList>

                        {databaseNames.map((name, index) => (
                        <MenuItem key={index} onClick={() => setDatabase(index)}>
                            {name}
                        </MenuItem>
                        ))}

                        {/*<MenuItem>Add Local Database (TODO)</MenuItem>*/}
                    </MenuList>
                </Menu>
                <Heading size="md">Current Database: </Heading>
                <Text>{databaseNames[database]}</Text>
            </HStack>
        </div>
    );
  }