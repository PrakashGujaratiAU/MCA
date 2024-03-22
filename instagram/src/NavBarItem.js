import React from 'react'

export default function NavBarItem(props) {
    return (
        <>
            <p style={{"fontSize":"20px"}}>{props.icon}<span style={{ marginLeft: '20px',"fontWeight":"bold","fontSize":"30px" }}>{props.text}</span></p>
        </>
    )
}
