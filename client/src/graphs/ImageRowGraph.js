import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { sortByIndex } from "../graphs/GraphSettings"

export default function ImageRowGraph({ dataIn }) {
    dataIn = dataIn.sort(sortByIndex)
    return (
        <TableContainer my="30px">
            <Table variant='simple' size='sm'>
                <Thead>
                    <Tr>
                        <Th>Image ID</Th>
                        <Th>Pipeline Step Failed</Th>
                        <Th>Time</Th>
                        <Th>Completion</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {dataIn.map( ( row, index) => (
                        <Tr key={index}>
                            <Td>{row[0]}</Td>
                            <Td>{row[1]?.length <= 20 ? row[1] : row[1].substring(0, 20) + "..."}</Td>
                            <Td>{(row[2])?.toFixed(2)}</Td> 
                            <Td>{row[3]}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
