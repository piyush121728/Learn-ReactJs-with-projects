import {useEffect, useState} from 'react'

// useCurrencyInfo return data about currency

function useCurrencyInfo(currency)
{
    const [data,setData] = useState({})
    //fetch data from api using react useEffect hooks
    useEffect(()=>{
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        /*
        => Fetch the data from api
        => Api will give a string data as a response then we will convert it into json object by using ".then((res) => res.json())"
        => Now we will store the required data from resposnce in a variable using ".then((res) => setData(res[currency]))"
        Note : Here, we can not use normal vairable to store the requried data because by using normal variable we can't update the data into our UI. So, we will use react useState hook. 
        */
        fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    },[currency])
    console.log(data);
    return data;
}

export default useCurrencyInfo;