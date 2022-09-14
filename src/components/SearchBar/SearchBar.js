import { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        
        setSearch(e.target.value)
    }

    const onClick = (e) => {
        console.log('Apretand botón');
    }

    return (

        <>
            <div>
                <div>
                    <input placeholder="Search Games"
                        onChange={onChange}></input>
                </div>
                <div>{search}</div>
                <Link to={`/search/${props.id}`}><button onClick={onClick}>search</button></Link>
            </div>
        </>
    )
}

export default SearchBar