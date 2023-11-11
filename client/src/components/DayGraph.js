import { Heading } from '@chakra-ui/react'
import { useState, useEffect } from "react";

import { callAPI } from '../funcs';

import SummaryGraph from "../graphs/SummaryGraph";
import ImageRowGraph from "../graphs/ImageRowGraph";

export default function DayGraph({ page, database }) {


    const [dayData, setDayData] = useState([]);

    useEffect(() => {
        callAPI(`http://127.0.0.1:5001/get_page/${database}/${page}`, processData)
    }, [page, database]);

    const processData = (dayDataIn) => {
        setDayData( () => dayDataIn);
    };

    return (
        <div>
            <SummaryGraph dataIn={dayData}></SummaryGraph>

            <Heading size="md">Images:</Heading>
            <ImageRowGraph dataIn={dayData}></ImageRowGraph>
        </div>
        
    );
}
