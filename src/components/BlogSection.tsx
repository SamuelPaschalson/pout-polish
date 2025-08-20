import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const data = [
    {
      img: "/blog.webp",
      title: "Lip Care 101",
      date: "Sept 31, 2025",
      comment: 8,
    },
    {
      img: "/blog1.jpeg",
      title: "What are you putting on",
      date: "Sept 26, 2025",
      comment: 8,
    },
    {
      img: "/blog2.jpg",
      title: "Homemade Lip Care",
      date: "Sept 30, 2025",
      comment: 8,
    },
  ];
  return (
    <div className="mx-auto px-[15px] pt-16">
      <h2 className="text-2xl font-bold">Blog Section</h2>
      <p className="text-gray-500">Blog section mini write up</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            comment={item.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
