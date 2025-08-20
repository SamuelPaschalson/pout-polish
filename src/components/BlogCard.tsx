import React from "react";

interface propTypes {
  img: string;
  title: string;
  date: string;
  comment: number;
}
const BlogCard = ({ img, title, date, comment }: propTypes) => {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
      />

      <div className="text-[#FF7043] font-medium">
        <span>{date}/ </span>
        <span>{comment} Comments</span>
      </div>
      <p className="font-bold text-xl">{title}</p>
    </div>
  );
};

export default BlogCard;
