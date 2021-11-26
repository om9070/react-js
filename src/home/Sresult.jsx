import React from 'react'

const Sresult = (props) => {
    const img = `https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <h1>this is Search</h1>
            <div>
                <img src={img} alt="search" />
            </div>
        </>
    )
}
export default Sresult;