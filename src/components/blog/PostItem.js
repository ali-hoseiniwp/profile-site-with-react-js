function PostItem({ postImg, postTitle, postText, postAuther, postTime }) {
  return (
    <>
        <div className="blog-box grid-item">
          <div className="blog-img">
            <img src={postImg} className="img-fluid" alt="post-image"/>
          </div>
          <div className="blog-content">
            <h3 className="blog-title">{postTitle}</h3>
            <p className="blog-desc">
              {postText}
            </p>
          </div>
          <div className="blog-footer">
            <div className="post-author">
              <p className="author">{postAuther}</p>
            </div>
            <div className="post-date">
              <span className="bi bi-clock"></span> {postTime}
            </div>
          </div>
        </div>
    </>
  )
}

export default PostItem