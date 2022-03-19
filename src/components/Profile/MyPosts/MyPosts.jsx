import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'It\'s my first message', likesCount: 4},
        {id: 2, message: 'It\'s my second message', likesCount: 7},
    ];

    let postsElements = posts.map((post)=>{
        return  <Post message={post.message} likesCount={post.likesCount}/>
    })

    return (
        <div className={classes.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;