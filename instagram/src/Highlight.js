function Highlight(props) {
  return (
    <div style={{"paddingTop": "10px","paddingLeft": "10px", "width":"60px"}}>
    <img style={{"borderRadius":"50%" ,"width":"70px","height":"70px","padding":"7px"}} src={props.image}  alt="story_image"/>
    <p style={{"margin":"0","marginLeft":"18px","fontSize":"20px"}}>{props.name}</p>
    </div>
  );
}

export default Highlight;