import React from "react";
import { string } from "prop-types";
import StyledBlog from "./Blog.styled";
// eslint-disable-next-line object-curly-newline
const Blog = ({ date, author, title, content }) => (
  <StyledBlog className="has-shadow">
    <h1>{title}</h1>
    <h3>
      {author}
      &nbsp;
      <span id="blog-date">
        <em>{date}</em>
      </span>
    </h3>
    {content}
  </StyledBlog>
);

export default Blog;

Blog.propTypes = {
  date: string.isRequired,
  author: string.isRequired,
  title: string.isRequired,
  content: string.isRequired,
};
