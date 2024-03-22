

function Feed(props)
{
    return(
        <>
        <div>
            <div>
                <img
                src={props.postImg}
                alt=""
                style={{ height: 200, width: 300, borderRadius: 20 }}
                />
                <div style={{"marginTop":"10px"}}>
                    <img
                        src="like.jpg"
                        alt=""
                        style={{ height: 20, width: 20, marginLeft: 10 }}
                    />
                    <img
                        src="comment.jpg"
                        alt=""
                        style={{ height: 20, width: 20, marginLeft: 10 }}
                    />
                    <img
                        src="share.jpg"
                        alt=""
                        style={{ height: 20, width: 20, marginLeft: 10 }}
                    />
                    <img
                        src="save.jpg"
                        alt=""
                        style={{
                        height: 20,
                        width: 20,
                        marginLeft: 10,
                        float: "right"
                        }}
                    />
                </div>
                <div>
                <p>
                <img
                    src={props.likedImg}
                    alt=""
                    style={{
                    borderRadius: "50%",
                    height: 20,
                    width: 20,
                    marginRight: 10,
                    marginTop: "-10px"
                    }}
                />
                Liked by <b>{props.likedBy}</b>
                </p>
                <p style={{marginTop: "-10px"}} >{props.caption}</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default Feed;