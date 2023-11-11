import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Heading } from '@chakra-ui/react'

import { mapIndex, dataTemplate } from './GraphSettings';

export default function SummaryGraph({ dataIn }) {
    let total = 0;
    let success = 0;
    let fail = 0;
    let successTime = 0;
    let failTime = 0;


    const summaryTable = [...dataTemplate]; // Create a new copy of the state
    summaryTable.forEach(row => {row["end"] = 0;});

    dataIn.forEach(item => {
        const pipelineStep = item[1];
        const time = item[2];
        total ++;
        if (pipelineStep in mapIndex) {
            summaryTable[mapIndex[pipelineStep]]["end"]++;
            if (pipelineStep === "save_image") {
                success ++;
                successTime += time;
            }
            else {
                fail ++;
                failTime += time;
            }
        }
    });

    const statsTable = [
        {header: "Total Images:",          body: total},
        {header: "Percent Success",        body: total ? (success/total*100).toFixed(2)+"%" : "0.00%"},
        {header: "Average Success Time",   body: success ? (successTime/success).toFixed(2)+"s" : "0s"},
        {header: "Average Fail Time",      body: fail ? (failTime/fail).toFixed(2)+"s" : "0s"},
    ]

    return (
        <div>
            <Heading size="md">Summary:</Heading>
            <TableContainer my="30px">
                <Table variant='simple' size='sm'>
                    <Tbody>
                        {statsTable.map( ({header, body}, index) => (
                            <Tr key={index}>
                                <Th>{header}</Th>
                                <Td>{body}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <TableContainer my="30px">
                <Table variant='simple' size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Step:</Th>
                            <Th>Images Ended at Step:</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {summaryTable.map( ({display, actual, end}, index) => (
                            <Tr key={index}>
                                <Th>{display}</Th>
                                <Td>{end}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}
