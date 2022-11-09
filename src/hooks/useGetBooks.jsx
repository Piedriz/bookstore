import React from 'react'
import axios from 'axios'

export const useGetBooks = () =>{
    const [searchText, setSearchText] = React.useState('ReactJS');
    const [info, setInfo] = React.useState([]);
    React.useEffect(()=>{
        getData()
    },[searchText])

    const getData = async () =>{
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchText}&maxResults=40`);
        const data = await response.data
        setInfo(data.items)
    }
    return {states:{info}, updaters:{setSearchText} }
}