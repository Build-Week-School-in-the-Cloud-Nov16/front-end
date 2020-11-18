import React, { useState } from 'react';

const SearchBox = () => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
               type='text'
               name='search'
               value={value}
               placeholder='Search'
               onChange={handleChange} 
            />

            <button>Search</button>
        </form>
    )
}

export default SearchBox;