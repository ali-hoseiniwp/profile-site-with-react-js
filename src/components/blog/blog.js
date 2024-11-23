import './blog.css';
import PostItem from './PostItem';
import blogimg1 from '../../assets/images/post-1.jpg';
import blogimg2 from '../../assets/images/post-2.jpg';
import blogimg3 from '../../assets/images/post-3.jpg';
function Blog() {

    let blogs = [
        {
            id : 1,
            postImg: blogimg1,
            postTitle: 'post title1',
            postText: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            postAuther: 'Ali Hosseini',
            postTime: '10 min'
        },

        {
            id : 2,
            postImg: blogimg2,
            postTitle: 'post title2',
            postText: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            postAuther: 'Ahmad rezai',
            postTime: '7 min'
        },

        {
            id : 3,
            postImg: blogimg3,
            postTitle: 'post title3',
            postText: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            postAuther: 'Ali Hosseini',
            postTime: '5 min'
        }
    ]
    return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="section-info">
                        <h2 className="section-title">BLOG</h2>
                        <p className="section-desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="row">
                        {blogs.map( post => <PostItem key={post.id} {...post}/>)}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog