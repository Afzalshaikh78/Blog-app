import React from "react";
import { FaBookmark, FaEdit, FaTrash } from "react-icons/fa";
import { Blog } from "./shared/types";
interface ArticleCardProps {
  article: Blog;
  onEdit: () => void;
  onDelete: () => void;
}
const ArticleCard: React.FC<ArticleCardProps> = ({ article, onEdit, onDelete }) => {
  return <div className="flex p-4 bg-white w-[40rem] mb-6 ml-[2rem] shadow-lg rounded-lg hover:shadow-xl transition-shadow">
    <img src={article.image} alt={article.title} className="w-36 h-24 rounded-lg object-cover shadow-md" />

    <div className="ml-6 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold">{article.title}</h3>
      <p className="text-gray-600 mt-2">{article.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm">
          {article.time}
        </span>
        <div className="flex space-x-4">
            <FaBookmark className="text-gray-500 cursor-pointer hover:text-gray-700" />
          <FaEdit onClick={onEdit} className="text-gray-500 cursor-pointer hover:text-gray-700" />
          <FaTrash onClick={onDelete} className=" cursor-pointer hover:text-gray-700 text-red-500" />
        </div>
      </div>
    </div>
  </div>;
};

export default ArticleCard;
