import { useState, useEffect } from "react";

import { callAPI } from '../funcs';

import SummaryGraph from "./SummaryGraph";

export default function OverallGraph({ database }) {


    const [dayData, setDayData] = useState([]);

    useEffect(() => {
        callAPI(`http://127.0.0.1:5001/all_pages/${database}`, processData)
    }, [database]);

    const processData = (dayDataIn) => {
        setDayData( () => dayDataIn);
    };

    return (
        <div>
            <SummaryGraph dataIn={dayData}></SummaryGraph>
        </div>
    );
}
