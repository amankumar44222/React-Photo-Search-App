import React from 'react'

const Image = ({src}) => {
    return (
        <>
        <li className="img">
            <img src={src} alt="photo" width="300"/>
        </li>
        </>
    )
}

export default Image
