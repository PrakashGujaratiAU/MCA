import avtarImage from './prakashgujarati.jpg'
function Avtar(props){
    return (
        <div style={{"padding-radius":"10px","textAlign":"center"}}>
            <img style={{"border-radius":"50%" , "width":"150px" , "height":"150px" , "padding":"7px" }} src={avtarImage} alt="avtar"/>
            <b><p style={{"margin":"0","font-size" : "22px"}}>{props.profile.name}</p></b>
            <p style={{"margin":"0","font-size" : "18px"}}>{props.profile.id}</p>
        </div>
    )
}
export default Avtar