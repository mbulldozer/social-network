import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="It's my first message" likesCount={23}/>
            <Post message="It's my second message" likesCount={10}/>
        </div>
    )
}

export default MyPosts;