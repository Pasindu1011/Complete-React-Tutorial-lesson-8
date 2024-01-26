import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  //we create a usestate to set error mgs and to display that error

  const [error, setError] = useState(null);
  

  const handleDelete = (id) => {
    const newblogs =blogs.filter(blog =>blog.id !== id);
    setBlogs(newblogs);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        if(!res.ok){
          throw Error('cloud not fetch the data for that resource');
        }
        return res.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
      })
      .catch(err => {
        setIsPending(false);
        console.log(err.message);
      })
    },1000);
  },[]);

  // here its only runs change name button only 
  //if we leave empty [] in dependency useEffect runs only once.

  return (
    <div className="home">
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div> }
      {blogs && <BlogList blogs={blogs} title='All blogs!' handledelete={handleDelete} /> }
      
    </div>
  );
}
 
export default Home;
