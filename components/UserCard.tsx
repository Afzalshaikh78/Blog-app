import React from "react";
import { FaUserCircle } from "react-icons/fa";
interface UserCardProps {
  index: number;
  person: {
    name: string;
    following: boolean;
  };
}
const UserCard = ({ index, person }: UserCardProps) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle key={index} className="text-2xl text-gray-500 mr-3" />
        <span>{person.name}</span>
      </section>
      <button
        className={`cursor-pointer ${
          person.following
            ? "px-4 bg-black - text-white rounded-full py-1"
            : "px-4 border border-gray-300 text-black rounded-full py-1 shadow bg-gray-200"
        }`}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
