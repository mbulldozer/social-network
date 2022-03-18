import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4XzRtc6D3UMlINE46_QGAMrj3K7jwvd6Nw&usqp=CAU" alt=""/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;