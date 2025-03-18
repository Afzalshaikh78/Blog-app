import React from "react";
import { useBlogs } from "./shared/BlogContext";
import { Blog } from "./shared/types";
import ArticleCard from "./ArticleCard";
interface ArticleListProps { 
  onEdit: (blog: Blog) => void;
  onDelete: (id: number) => void;
}
const ArticleList:React.FC<ArticleListProps> = ({onEdit}) => {
 const {blogs,deleteBlog} = useBlogs()
  return (
    <div className="ml-[5rem]">
      {blogs.map((blog) => (
        <ArticleCard key={blog.id} article={blog} onEdit={()=> onEdit(blog)} onDelete={()=> deleteBlog(blog.id)} />
      ))}
    </div>
  );
};

export default ArticleList;
