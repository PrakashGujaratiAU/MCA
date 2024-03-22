import Feed from './Feed.js';
import Contact from './Contact.js';

function Post(){
    return (
        <div style={{backgroundColor:"white", borderRadius: 20 ,  width: 300 ,marginLeft:"20px",padding:10, marginTop:"20px"}}>
        <Contact  img="img.jpg" userName="Sonia leena" location="Dubai UAE" />
        <Feed postImg="img.jpg" likedImg="img.jpg" likedBy="Anuv jain and 306 others" caption="you can never dull my sparkle" />
        {/* <Feed img="img.jpg" userName="Sonia leena" location="Dubai UAE" postImg="img.jpg" likedImg="img.jpg" likedBy="Anuv jain and 306 others" caption="you can never dull my sparkle" /> */}
        </div>
    )
}
export default Post