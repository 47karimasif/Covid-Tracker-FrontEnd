import React,{useState,useEffect} from 'react';

import axios from 'axios';

const StatePicker = () => {
    const [results,setResults] = useState(" ");
    const url = 'https://api.rootnet.in/covid19-in/stats/latest';
    const fetchState = async() => {
        try {
            const res = await axios.get(url);
            setResults(res.data.data.regional.loc);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchState();
    },[])

    return(
        <h1>
            StatePicker
        </h1>
    )
}

export default StatePicker;