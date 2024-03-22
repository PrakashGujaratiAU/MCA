function Story(props) {
  return (
    <div style={{"paddingTop": "10px","paddingLeft": "10px", "width":"90px","textAlign":"center"}}>
    <img style={{"borderRadius":"50%" ,"width":"90px","height":"90px","padding":"7px","border":"3px solid red" }} src={props.image}  alt="story_image"/>
    <p style={{"marginTop":"10px","fontSize":"18px"}}>{props.name}</p>
    </div>
  );
}

export default Story;