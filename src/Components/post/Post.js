import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="" alt=""></img>

        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">lorem
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        </div>
    );
}