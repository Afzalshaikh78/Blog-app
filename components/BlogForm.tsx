import React, { useEffect, useState } from "react";
import { useBlogs } from "./shared/BlogContext";
import { Blog } from "./shared/types";

interface BlogFormProps {
  existingBlog?: Blog;
  onClose: () => void;
}

const BlogForm:React.FC<BlogFormProps> = ({existingBlog , onClose}) => {
  const { addBlog, updateBlog } = useBlogs();
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [description, setDescription] = useState(existingBlog?.description || "");
  const [image, setImage] = useState(existingBlog?.image || "");
  const [time, setTime] = useState(existingBlog?.time || "");
  
  useEffect(() => {
    if (existingBlog) {
      setTitle(existingBlog.title);
      setDescription(existingBlog.description);
      setImage(existingBlog.image);
      setTime(existingBlog.time);
    }
  }, [existingBlog, setDescription]);
  
  const handleSubmit = () => {
    const blog:Blog = {
      id: existingBlog ? existingBlog.id : Date.now(),
      title,
      description,
      image,
      time,
    }
    if(existingBlog){
      updateBlog(blog);
    }else{
      addBlog(blog);
    }
    onClose();
  }
  return (
    <div className="bg-white p-4 rounded-lg w-[30rem] mx-auto">
      <h3 className="font-semibold text-lg mb-4">
        {existingBlog ? "Edit Blog" : "Add New Blog"}
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2"
        />

        <textarea
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none h-24"
        />

        <input type="text" value={image} placeholder="Image URL" onChange={(e) => setImage(e.target.value)} className="w-full px-4 py-2  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2" />

        <input type="date" value={time} placeholder="Time" onChange={(e) => setTime(e.target.value)} className="w-full px-4 py-2  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 text-gray-500" />
      </div>

      <section className="flex justify-end">
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-3xl hover:bg-blue-600 mt-4 ">
          {existingBlog ? "Update" : "Add"}
        </button>
        <button onClick={onClose} className="bg-gray-500 text-white px-6 py-2 rounded-3xl hover:bg-gray-600 mt-4 ml-2">Cancel</button>
      </section>
    </div>
  );
};

export default BlogForm;
                                     