import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs,setBlogs] = useState([
    {title:'My new website',body:'lorem ipsum...',author:'mario',id:1},
    {title:'welcome party!',body:'lorem ipsum...',author:'yoshi',id:2},
    {title:'web dev top tips',body:'lorem ipsum...',author:'luigi',id:3},
  ]);
  
  const handleDelete = (id) => {
    const newblogs =blogs.filter(blog =>blog.id !== id);
    setBlogs(newblogs);
  }

  return (
    <div className="home">
    <BlogList blogs={blogs} title="All Blogs!" handledelete={handleDelete}/> 
    {/* here title also an argument we pass to bloglist */}
    </div>
  );
}
 
export default Home;
