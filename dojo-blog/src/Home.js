import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  

  const handleDelete = (id) => {
    const newblogs =blogs.filter(blog =>blog.id !== id);
    setBlogs(newblogs);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      });
    },1000);
  },[]);

  // here its only runs change name button only 
  //if we leave empty [] in dependency useEffect runs only once.

  return (
    <div className="home">
      {isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title='All blogs!' handledelete={handleDelete} /> }
      
    </div>
  );
}
 
export default Home;
