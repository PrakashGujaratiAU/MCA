function Stat(props){
    return (
        <div style={{"width":"100px"}}>
            <h1 style={{"padding":"0px","margin":"0px","width":"100px","font-size":"22px","borderRight":`${props.border && props.numeric != null ? 2 : 0}px solid black`}}>{props.numeric}</h1>
            <p style={{"padding":"0px","marginTop":"10px","font-size":"18px","borderRight":`${props.border && props.numeric == null ? 2 : 0}px solid black`}}>{props.title}</p>            
        </div>
    )
}

export default Stat

// "borderRight":"2px solid black"