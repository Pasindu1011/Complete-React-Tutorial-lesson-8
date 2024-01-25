const BlogList = ({blogs, title, handledelete}) => {
    return ( 
        <div className="blog-list">
            <h3> {title }</h3>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <button onClick={() => handledelete(blog.id)}>delete blog</button>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;