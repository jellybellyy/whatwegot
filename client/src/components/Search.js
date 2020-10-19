import React from 'react';

function Search({ inputHandler, submitHandler, input }) {

    return (
        <form onSubmit={(e) => { e.preventDefault(); submitHandler(e); }}>
            <input type="text" value={input} onChange={(e) => { inputHandler(e) }} />
            <input type="submit" value="Search" />
        </form>
    )
}

export default Search