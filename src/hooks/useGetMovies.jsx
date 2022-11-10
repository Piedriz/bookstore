import React from 'react'
import axios from 'axios'

export const useGetMovies = () => {
  
    const [searchText, setSearchText] = React.useState('Batman');
    const [info, setInfo] = React.useState([]);
    React.useEffect(() => {
        getData()
    }, [searchText])

    const getData = async () => {
        const response = await axios.get(`
        https://api.themoviedb.org/3/search/movie?api_key=71deef937057a7bb6ef40b2568a4bcf0&language=en-US&query=${searchText}&page=1&include_adult=true`);
        const data = await response.data
        setInfo(data.results)
    }
    return { states: { info }, updaters: { setSearchText } }
}