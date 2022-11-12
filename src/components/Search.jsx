import React from 'react'

export const Search = ({updater}) => {


    const handleSearch = () => {
        updater(ref.current.value)
    }
    const ref = React.useRef();
    return (
        <div>
            <input type="text" placeholder='realize su busqueda' ref={ref} />
            <button onClick={() => { handleSearch() }} type='button'>Buscar</button>
        </div>
    )
}
