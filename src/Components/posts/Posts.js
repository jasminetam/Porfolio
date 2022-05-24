import "./Posts.css"
import Post from "../post/Post"
import { BLOG_DATA } from "../../STATIC_DATA/BLOG_DATA"

const arr = [1, 2, 3, 4, 5, 6]

export default function Posts() {
    console.log(BLOG_DATA)
    return (
        <div className="posts">
            {arr.map((_, __) => {
                return (
                    <Post />
                )
            })}
        </div>
    )
}