import React, { useState } from "react";
import Navigation from "../components/Navigation";
import PeopleToFollow from "../components/PeopleToFollow";
import TrendsList from "../components/TrendsList";
import TopTopics from "../components/TopTopics";
import { BlogProvider } from "../components/shared/BlogContext";
import { IoMdAddCircle } from "react-icons/io";
import { Blog } from "../components/shared/types";
import Modal from "../components/Modal";
import BlogForm from "../components/BlogForm";
import ArticleList from "../components/ArticleList";
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setIsModalOpen(true);
    setEditingBlog(null);
  };

  const openModalForEditingBlog = (blog: Blog) => {
    setIsModalOpen(true);
    setEditingBlog(blog);
  };
  
  
  
  return (
    <div>
      <BlogProvider>

      
        <Navigation />
        <div className="flex justify-center">

        <section className="mx-auto p-5">
          <div>
            <button onClick={openModalForNewBlog} className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4 cursor-pointer">
              Add New Blog <IoMdAddCircle className="ml-2" />
              </button>
              <ArticleList onEdit={openModalForEditingBlog}  />
              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <BlogForm existingBlog={editingBlog} onClose={() => setIsModalOpen(false)} />
                </Modal>
              )}
          </div>
        </section>
        

      
        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendsList />
          <TopTopics />
        </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
